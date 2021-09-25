# Wot_Dis

This is a program designed to perform Discord message data analytics and more (TBD).
As for now, this program runs an interactive Discord bot which can read and respond to commands and certain phrases, read and breakdown the most recent 100 messages per channel per bootup, partition each line by word (punctuation included / NOT ignored), and insert each word with relevant data, into a MongoDB Atlas database. It can then retrieve relevant data as requested by the user via specific commands.

TODO: use https://stackedit.io/app# for README.md

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
         - recursively parse through all channels accessible by the bot
         - retrieve most recent 100 messages per channel
         - partition each message into individual words (separated by spaces)
         - input individual words with relevant data components into MongoDB Atlas database

