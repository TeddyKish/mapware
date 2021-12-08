from .db import DB, OS_TYPE
from ipaddress import IPv4Address


@DB.add(22, OS_TYPE.LINUX)
def run(ip: IPv4Address):
    """
    Heartbleed, network based attack on open-ssh version <=
    """
    print('run heartbleed on ' + str(ip))
    return True