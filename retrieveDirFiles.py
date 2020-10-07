import os
folders = os.listdir("./src/assets/products")
print(folders)
print(folders.remove('.DS_Store'))
for folder in folders:
    f_list = os.listdir(f"./src/assets/products/{folder}")

    for index, file in enumerate(f_list):
        os.rename(f"./src/assets/products/{folder}/{file}", f"./src/assets/products/{folder}/img_{index}.jpg")

    print(folder, os.listdir(f"./src/assets/products/{folder}"))