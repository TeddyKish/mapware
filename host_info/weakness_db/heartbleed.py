from .db import DB, OS_TYPE
from ipaddress import IPv4Address


@DB.add("https", OS_TYPE.NONE)
def run(ip: IPv4Address):
    """
    Heartbleed, network based attack on open-ssh version <=
    """
    print('run heartbleed on ' + str(ip))
    return True