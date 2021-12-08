from ipaddress import IPv4Address
from host_info.weakness_db.db import OS_TYPE, DB
from typing import (
    List
)


class Host:
    """
    Run shit on a single host
    """
    def __init__(self, host: str, ports: List[int], os_type: str):
        """
        :param host: IP
        :param ports: What ports are open
        :param os_type:  linux/windows/none
        """

        self._host, self._ports, self._os_type = IPv4Address(host), ports, OS_TYPE(os_type)

    def run_check(self) -> dict:
        worked = []

        for port in self._ports:
            for callable in DB[(port, self._os_type)]:
                if callable(self._host):
                    worked.append(callable.__doc__.strip())

        return worked

    def get_host_info(self):
        ...