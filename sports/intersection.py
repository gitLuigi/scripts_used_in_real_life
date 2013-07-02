#!/usr/bin/env python3

import sys

NUM_DATA_FILES = len(sys.argv)

def test_data():
    """Prints out data file to manually check for data file formatting. lolz
    
    Args:
        none.
    Returns:
        Data file contents to console.

    """
    for i in range(1, NUM_DATA_FILES):
        f = open(sys.argv[i], "r")
        data = f.read()
        f.close()
        print("DATA FILE #%d..." % (i))
        print(data)

def intersect(a, b):
    return list(set(a) & set(b))

def main():
    """Put data file contents as elements into array and other stuff.
    
    Args:
        none.
    Returns:
        awesomeness.
    Limitations:
        2 data files only. Files requires specific formatting.

    """

#===============================================================================
# To do later: Remove number-of-files limitation
#===============================================================================
    """
    template_dataset_variable_name = "dataset"
    for i in range(NUM_DATA_FILES):
        template_dataset_variable_name += str(i)
        setattr(template_dataset_variable_name, "num"+str(i),[])
        template_dataset_variable_name = "dataset"
    """ 
#===============================================================================

    dataset1 = []
    dataset2 = []
    
    for line in open(sys.argv[1]):
        dataset1.append(line.strip())
    for line in open(sys.argv[2]):
        dataset2.append(line.strip())

    datasets_intersection = intersect(dataset1, dataset2)
    
    size_dataset1 = len(dataset1)
    size_dataset2 = len(dataset2)
    size_intersection = len(datasets_intersection)

    print("Size of dataset1 is:", size_dataset1)
    print("Size of dataset2 is:", size_dataset2)
    print("Size of intersection is:", size_intersection)

if __name__ == '__main__':
    if (len(sys.argv) != 3):
        print("Usage: $%s <data file 1> <data file2>" % (sys.argv[0]))
    else:
        print("Processing datasets '%s' and '%s' with '%s'...\n"
              % (sys.argv[1], sys.argv[2], sys.argv[0]))
        main()
