from ipaddress import IPv4Address
from subprocess import Popen, PIPE
from host_info.weakness_db.db import OS_TYPE, DB
from typing import (
    List
)

class Host:
    """
    Run shit on a single host
    """
    def __init__(self, host: str=None, ports: List[int]=None, os_type: str=None):
        """
        :param host: IP
        :param ports: What ports are open
        :param os_type:  linux/windows/none
        """

        self._host = IPv4Address(host)

        if not ports:
            print('getting ports')
            ports = self.get_nmap()
            print(ports)        

        if not os_type:
            print('getting os')

            try:
                os_type = self.get_os_type()
            except KeyboardInterrupt:
                exit()
            except:
                os_type = None

            print(os_type)        

        self._ports, self._os_type = ports, OS_TYPE(os_type)


    def get_nmap(self):
        proc = Popen(f'sudo nmap -O {str(self._host)}'.split(), stdout=PIPE, stderr=PIPE, stdin=None)

        proc.wait()  
        nmap_res = proc.stdout.read().decode('UTF-8').split('\n')
        start_index = [nmap_res.index(line) for line in nmap_res if 'PORT' in line][0] + 1
        end_index = [nmap_res.index(line) for line in nmap_res if 'MAC Address' in line][0]
        port_list = nmap_res[start_index:end_index]
        
        return [list(item.split()[0].split('/')) + list(item.split()[1:]) for item in port_list]

    def get_os_type(self):
        proc = Popen(f'sudo ping -c 1 {str(self._host)}'.split(), stdout=PIPE, stderr=PIPE, stdin=None)

        proc.wait()  
        ping_res = proc.stdout.read().decode('UTF-8').split('\n')
        ttl = int(ping_res[1][ping_res[1].index('ttl=') + 4:ping_res[1].index('ttl=') + 7].strip())
        if ttl in range(80, 129):
            return 'windows' 
        elif ttl in range(10, 65):
            return 'linux'
        else:
            return None

    def run_check(self) -> dict:
        worked = []

        for port, proto, status, service in self._ports:
            for callable in DB[(service, self._os_type)]:
                if callable(self._host):
                    worked.append(callable.__doc__.strip())

        return worked

    def __str__(self):
        return f'{str(self._host)} {self._ports} {self._os_type}'

    def get_host_info(self):
        ...