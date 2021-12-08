import os



def scan_hosts()
    # Returns a list of hosts

    os.system('ipscan -f:range 10.105.62.0 10.105.63.255 -o map.txt -q')
    
    with open('map.txt') as f:
        data = f.read()
    
    data = data.replace('\xa0', '')
    sep_lines = data.split('\n')
    sep_lines_rel = sep_lines[7:]



if __name__ == "__main__":
    pass