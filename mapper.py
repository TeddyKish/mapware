import os
from host_info.host import Host

IPSCAN_HOST_DOWN = "[n/a]"

def scan_hosts():
    # Returns a list of hosts

    os.system('ipscan -f:range 10.105.62.0 10.105.63.255 -o map.txt -q')
    
    with open('map.txt') as f:
        data = f.read()
    
    data = data.replace('\xa0', '')
    sep_lines = data.split('\n')
    sep_lines_rel = sep_lines[7:]

    hosts = []

    for line in sep_lines_rel:
        if len(line.split()) > 0 and line.split()[1] != IPSCAN_HOST_DOWN:
            hosts.append(Host(line.split()[0]))
    
    

    
def main():
    # gets relevant IP addresses
    scan_hosts()


if __name__ == "__main__":
    main()