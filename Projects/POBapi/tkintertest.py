from tkinter import *

root = Tk()

# creating a label widget
myLabel1 = Label(root, text="Hello World!")
myLabel2 = Label(root, text="ayo!")

# packing onto grid
#myLabel1.grid(row=0, column=0)
#myLabel2.grid(row=1, column=0)

myButton = Button(root, text="Click me", padx=50, pady=50)
myButton.pack()

root.mainloop()