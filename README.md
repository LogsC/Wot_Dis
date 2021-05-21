# Wot_Dis

This is a program designed to perform data analytics and more (TBD).
As for now, this program creates an interactive Discord bot which can read and respond to commands and certain phrases.

TODO: use https://stackedit.io/app# for README.md

TODO: extract messages from discord client, upload to MongoDB, perform data analytics upon user request

Discord Messages Data Analysis:

    Data Components:
     - one data entry contains:
         - word
         - date (timestamp)
         - message ID
         - user ID
         - guild (server) ID

    Data Extraction:
     - upon loading bot:
         - check last input message date from MDB (largest timestamp)
         - input all messages from said date until current
         - monitor for new messages, input as necessary
