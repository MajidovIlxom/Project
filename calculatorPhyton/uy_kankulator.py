import os
import sys
os.system("cls")
from  PyQt5 import QtWidgets,QtGui,QtCore

def kankulator():
    app=QtWidgets.QApplication(sys.argv)
    widget=QtWidgets.QWidget()
    widget.setMinimumSize(300,500)
    widget.setMaximumSize(300,500)
    widget.move(0,0)


    
    txtbox9=QtWidgets.QLineEdit(widget)
    txtbox9.setGeometry(0,0,300,80)
    txtbox9.setText("0")
    txtbox9.setFont(QtGui.QFont("Consolas",24))
    txtbox9.setStyleSheet("""color: rgb(0,10,0);
                         border-width: 3px;
                         border-style: solid;
                         border-radius: 15px;
                         border-color:  rgb(0,10,0);""")
    # txtbox.setAlignment(QtCore.Qt.AlignCenter)

    txtbox_uchirish=QtWidgets.QPushButton("ON",widget)
    txtbox_uchirish.setGeometry(0,80,150,80)
    
    txtbox_uchirish.setFont(QtGui.QFont("Consolas",16))
    txtbox_uchirish.setStyleSheet("""
                        color: rgb(0,5,0);
                        background-color: RED;
                        border-width: 3px;
                        border-style: inset;
                        border-radius: 40px;
                        border-color:  rgb(0,5,0);""")
    

    txtbox_bir=QtWidgets.QPushButton("C",widget)
    txtbox_bir.setGeometry(150,80,150,80)

    txtbox_bir.setFont(QtGui.QFont("Consolas",16))
    txtbox_bir.setStyleSheet("""
                        color: rgb(0,5,0);
                        background-color: RED;
                        border-width: 3px;
                        border-style: inset;
                        border-radius: 40px;
                        border-color:  rgb(0,5,0);""")
    

    txtbox=QtWidgets.QPushButton("1",widget)
    txtbox.setGeometry(0,160,100,80)
    txtbox.setFont(QtGui.QFont("Consolas",16))
    txtbox.setStyleSheet("""
                        color: rgb(49,140,235);
                        background-color: black;
                        border-width: 3px;
                        border-style: inset;
                        border-radius: 40px;
                        border-color:  rgb(0,5,0);""")

    txtbox1=QtWidgets.QPushButton("2",widget)
    txtbox1.setGeometry(100,160,100,80)
    txtbox1.setFont(QtGui.QFont("Consolas",16))
    txtbox1.setStyleSheet("""
                        color: rgb(49,140,235);
                        background-color: black;
                        border-width: 3px;
                        border-style: inset;
                        border-radius: 40px;
                        border-color:  rgb(0,5,0);""")


    txtbox2=QtWidgets.QPushButton("3",widget)
    txtbox2.setGeometry(200,160,100,80)
    txtbox2.setFont(QtGui.QFont("Consolas",16))
    txtbox2.setStyleSheet("""
                        color: rgb(49,140,235);
                        background-color: black;
                        border-width: 3px;
                        border-style: inset;
                        border-radius: 40px;
                        border-color:  rgb(0,5,0);""")



    txtbox3=QtWidgets.QPushButton("4",widget)
    txtbox3.setGeometry(0,240,100,80)
    txtbox3.setFont(QtGui.QFont("Consolas",16))
    txtbox3.setStyleSheet("""
                        color: rgb(49,140,235);
                        background-color: black;
                        border-width: 3px;
                        border-style: inset;
                        border-radius: 40px;
                        border-color:  rgb(0,5,0);""")



    txtbox4=QtWidgets.QPushButton("5",widget)
    txtbox4.setGeometry(100,240,100,80)
    txtbox4.setFont(QtGui.QFont("Consolas",16))
    txtbox4.setStyleSheet("""
                        color: rgb(49,140,235);
                        background-color: black;
                        border-width: 3px;
                        border-style: inset;
                        border-radius: 40px;
                        border-color:  rgb(0,5,0);""")



    txtbox5=QtWidgets.QPushButton("6",widget)   
    txtbox5.setGeometry(200,240,100,80)
    txtbox5.setFont(QtGui.QFont("Consolas",16))
    txtbox5.setStyleSheet("""
                        color: rgb(49,140,235);
                        background-color: black;
                        border-width: 3px;
                        border-style: inset;
                        border-radius: 40px;
                        border-color:  rgb(0,5,0);""")



    txtbox6=QtWidgets.QPushButton("7",widget)
    txtbox6.setGeometry(0,320,100,80)
    txtbox6.setFont(QtGui.QFont("Consolas",16))
    txtbox6.setStyleSheet("""
                        color: rgb(49,140,235);
                        background-color: black;
                        border-width: 3px;
                        border-style: inset;
                        border-radius: 40px;
                        border-color:  rgb(0,5,0);""")



    txtbox7=QtWidgets.QPushButton("8",widget)
    txtbox7.setGeometry(100,320,100,80)    
    txtbox7.setFont(QtGui.QFont("Consolas",16))
    txtbox7.setStyleSheet("""
                        color: rgb(49,140,235);
                        background-color: black;
                        border-width: 3px;
                        border-style: inset;
                        border-radius: 40px;
                        border-color:  rgb(0,5,0);""")
    


    txtbox8=QtWidgets.QPushButton("9",widget)   
    txtbox8.setGeometry(200,320,100,80)    
    txtbox8.setFont(QtGui.QFont("Consolas",16))
    txtbox8.setStyleSheet("""
                        color: rgb(49,140,235);
                        background-color: black;
                        border-width: 3px;
                        border-style: inset;
                        border-radius: 40px;
                        border-color:  rgb(0,5,0);""")
    


    txtbox_nol=QtWidgets.QPushButton("0",widget)
    txtbox_nol.setGeometry(0,400,150,80)
    txtbox_nol.setFont(QtGui.QFont("Consolas",16))
    txtbox_nol.setStyleSheet("""
                        color: rgb(49,140,235);
                        background-color: black;
                        border-width: 3px;
                        border-style: inset;
                        border-radius: 40px;
                        border-color:  rgb(0,5,0);""")
   


    txtbox_tenglik=QtWidgets.QPushButton("=",widget)
    txtbox_tenglik.setGeometry(150,400,150,80)    
    txtbox_tenglik.setFont(QtGui.QFont("Consolas",16))
    txtbox_tenglik.setStyleSheet("""
                        color: rgb(0,5,0);
                        background-color: RED;
                        border-width: 3px;
                        border-style: inset;
                        border-radius: 40px;
                        border-color:  rgb(0,5,0);""")
    

    widget.show()
    sys.exit(app.exec_())
if __name__=="__main__":
    
    kankulator()
