import os
import subprocess
import sys

def rename_files(file_name):

    notes = ["A0", "Asharp0", "B0", "C1", "Csharp1", "D1", "Dsharp1", "E1", "F1", "Fsharp1", "G1", "Gsharp1", "A1", "Asharp1", "B1", "C2", "Csharp2", "D2", "Dsharp2", "E2", "F2", "Fsharp2", "G2", "Gsharp2", "A2", "Asharp2", "B2", "C3", "Csharp3", "D3", "Dsharp3", "E3", "F3", "Fsharp3", "G3", "Gsharp3", "A3", "Asharp3", "B3", "C4", "Csharp4", "D4", "Dsharp4", "E4", "F4", "Fsharp4", "G4", "Gsharp4", "A4", "Asharp4", "B4", "C5", "Csharp5", "D5", "Dsharp5", "E5", "F5", "Fsharp5", "G5", "Gsharp5", "A5", "Asharp5", "B5", "C6", "Csharp6", "D6", "Dsharp6", "E6", "F6", "Fsharp6", "G6", "Gsharp6", "A6", "Asharp6", "B6", "C7", "Csharp7", "D7", "Dsharp7", "E7", "F7", "Fsharp7", "G7", "Gsharp7", "A7", "Asharp7", "B7", "C8"]

    for i in range(1, 89):
        base_directory = os.path.dirname(os.path.realpath(__file__))
        old_file_name = base_directory+ "/" + file_name + "/note" + str(i) + ".mp3"
        new_file_name = base_directory+"/" + file_name + "/" +notes[i - 1] + ".mp3"
        os.rename(old_file_name, new_file_name)

def main():

  
    dir_path = os.path.dirname(os.path.realpath(__file__))
    # get user input on the name of the file
    file_name = input("Enter the name of the file: ")
    audio_file_path = dir_path + "/" + file_name + ".mp3"

    for i in range(1, 89):

        start_time = (i - 1) * 5      
        end_time = i * 5

        subprocess.call(["ffmpeg", "-i", audio_file_path, "-ss", str(start_time), "-to", str(end_time), "-c", "copy", dir_path + "/" + file_name + "/note" + str(i) + ".mp3"])

    rename_files(file_name)

main()




