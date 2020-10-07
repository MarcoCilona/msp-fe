import os
import sys

folder = sys.argv[1]
f_list = os.listdir(f"./src/assets/products/{folder}")

for index, file in enumerate(f_list):
    if file.find('img_', 0, 4) == -1:
        os.rename(f"./src/assets/products/{folder}/{file}", f"./src/assets/products/{folder}/img_{index}.jpg")

print(folder, os.listdir(f"./src/assets/products/{folder}"))