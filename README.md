# BLockCure
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![](https://geps.dev/progress/10)

BlockCure is an healthcare platform for hospitals to share personal healthcare information amongst other hospitals and research professionals in an anonymized format.

It was desiged and developed by team TIUCSE for the [Anonymiser Hackathon](https://anonymiser.wb.gov.in/).<br> 
The system was originally developed using java and python.

Get started by cloning the repository.

To run the system first install all the required libraries by typing in the following commands in your terminal:
  - Initialise node project: `npm init`
  - To install node modules use:  `npm install` and install the packages mentioned in the package.json file.
  - To install python packages:  `pip install -r requirement.txt`

To run the javascript server, simply type: `npm start`

To run the python server, simply type: `cd deidentifier_api && uvicorn main:app --reload` 

***Note*** :
 - Avoid using virtual environments to install your python package since one of the packages used is not compatible with virtual environment.
 - Usage of bash terminal to run the python server is recommended since uvicorn cannot run in powershell or command prompt without a virtual environment.

