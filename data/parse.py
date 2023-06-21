import json
import datetime

def convert_to_json(input_file, output_file):
    data = []
    with open(input_file, 'r') as f:
        lines = f.readlines()
        for line in lines:
            parts = line.strip().split(', ')
            
            # convert date to MM/DD/YYYY format
            date_parts = parts[1].split(' ')[1].split('-')
            date_dict = {'month': date_parts[1], 'day': date_parts[2], 'year': date_parts[0]}
            date_string = "{}/{}/{}".format(date_dict['month'], date_dict['day'], date_dict['year'])
            
            # separate coordinates into x, y, z
            x = float(parts[2])
            y = float(parts[3])
            z = float(parts[4].rstrip(',')) # remove trailing comma

            # add to data
            data.append({
                'date': date_string,
                'x': x,
                'y': y,
                'z': z
            })
    
    # write out as json
    with open(output_file, 'w') as f:
        json.dump(data, f, indent=4)

input_file = 'public/data/ephemeris.txt'
output_file = 'public/data/ephemeris.json'

convert_to_json(input_file, output_file)
