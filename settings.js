const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'your key',
}

global.alivemsg = `📤I am alive now😇
🤷‍♀️How can I help you?😉` //Costomize Alive Message (type your message in `` )


global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoreadpmngc = false //auto reading in gc and pm (true to on, false to off)
global.autoReadGc = false //auto reading in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.available = true //auto available (true to on, false to off)

global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owner v card
global.vcardowner = ['+94761138613'] // owner number
global.ownername = "😎𝙆.𝙋𝙧𝙖𝙗𝙝𝙖𝙨𝙝𝙖❯❯" // owner name
global.ytname = "" // sl tech
global.socialm = "GitHub: prabhasha2006" // github or insta name
global.location = "India, Mizoram, Aizawl" // location

//bot body 
global.alivepic = `https://i.ibb.co/cyyCjN7/20220803-081426.png` // alive picture \\ use "https://ibb.com" to upload photos. < 1 MB

global.dragonchat = "false"  // chat bot  "true" / "false" (200 auto replies in this)
global.callblock = "false" // call block "true" / "false" ("true"  to block callers)
global.antibad = "false" // To remove bad word senders
global.antispam = "true" // To remove or block spammers
global.antilink = "false" // To remove group link sharing peoples
global.upsongvoice = "false" // true/false \\ bot can upload song as voice note (it use your data and storage bacause auto download) you can put "false" (anyone can't get songs as voice note / your data is not wasted)
global.welcom_msg = "true" // Welcome / Goodbye   [true/false]


global.owner = ['+94761138613']
global.ownertag = '+94761138613' //your tag number
global.botname = '𝙍𝙀𝘿╺ 𝘿𝙍𝘼𝙂𝙊𝙉 - 𝘉𝘖𝘛' //ur bot name
global.packname = "Bot Sticker" // sticker packname
global.author = "𝙍𝙀𝘿╺ 𝘿𝙍𝘼𝙂𝙊𝙉" // sticker author
global.dragonemoji = '🧩' // Menu emoji
global.footer = '[ ◉ ʀᴇᴅ-ᴅʀᴀɢᴏɴ-ᴍᴅ ]' //

//database
global.premium = ['+94761138613'] //ur premium numbers

//other
global.sessionName = '{ "creds": { "noiseKey": { "private": { "type": "Buffer", "data": "CFQMDBwGDXy1oMst4vWhxEySTIdiw6e0qZTQKjHSx38=" }, "public": { "type": "Buffer", "data": "3/oqHqUdgmRDJdqJClK7m7iJPO8GxnbhjQFMhZxK1kI=" } }, "signedIdentityKey": { "private": { "type": "Buffer", "data": "2A+Ov6t4rDC4yo2FggSpV+kUfZMNyrOG8MYBejLlhkA=" }, "public": { "type": "Buffer", "data": "5afWX1saEacJu4YtKHRLE2M+AaHsxztN6Ad1yyaP2lU=" } }, "signedPreKey": { "keyPair": { "private": { "type": "Buffer", "data": "WEbxLHNonLbZJhafpslLr0irBJRZQCYYwMtx7NpEe2M=" }, "public": { "type": "Buffer", "data": "GyIk2sS9DVo+VniKqvl9ap4IehWxKA/1hZbFYrlhhW8=" } }, "signature": { "type": "Buffer", "data": "XS0g6zemJbO8pc/nL2n0Cq9aFRaq9xnWFpln3LPoU42iJzBENYDo9MhJHDKNacOHawGt5XFYdk5Mq8i+/xVHjw==" }, "keyId": 1 }, "registrationId": 81, "advSecretKey": "CXTbTYSeulksgdkzWETurUEHKoZnus9IdxhtXRHtmL8=", "nextPreKeyId": 31, "firstUnuploadedPreKeyId": 31, "serverHasPreKeys": true, "account": { "details": "CPiW9oEEEP+RiqIGGAE=", "accountSignatureKey": "tdXppd/rCB5ZoeEa+39sc6dkpeBtt4VO5zs9TSJB7yo=", "accountSignature": "hVQnPzrNCfJAMVMq574qukGM23uN5EXcR9wi27eXqXjikHiwkv89LxaXm4GhrbzkKXpuwIkM1U1cyURVUg9eAQ==", "deviceSignature": "ACDP/8Yb5o0VhdruuPL4WRkx1Gr2sBi140uUFIIulpFLrlxdCfuhRe8ojAfILbR/1+OSXs0BnRZIhwsy5Tl3iw==" }, "me": { "id": "94771505222:2@s.whatsapp.net", "verifiedName": "RED DRAGON BOT", "name": "RED DRAGON BOT" }, "signalIdentities": [ { "identifier": { "name": "94771505222:2@s.whatsapp.net", "deviceId": 0 }, "identifierKey": { "type": "Buffer", "data": "BbXV6aXf6wgeWaHhGvt/bHOnZKXgbbeFTuc7PU0iQe8q" } } ], "lastAccountSyncTimestamp": 1682082050, "myAppStateKeyId": "AAAAAIiV" }, "keys": { "preKeys": { "1": { "private": { "type": "Buffer", "data": "kAaztJtDbgPdGQkhxy2p8MjhCMcC5PwjVoc6eonsIX0=" }, "public": { "type": "Buffer", "data": "IPOBjprhPqzgs36r3M2pMafwKOzfQUa+OAzD58mARnw=" } }, "2": { "private": { "type": "Buffer", "data": "AKmhm/7q7ZZIBXWe1hjMuYxdv+UvxpP2zMINOgMPbUo=" }, "public": { "type": "Buffer", "data": "h8Sd0BIQG9SZ9CsYAaZtOntUgsbZ1I5wezfdF1/mvUU=" } }, "3": { "private": { "type": "Buffer", "data": "uJ0lj1DO7xkVObheJ/bBMjMPWIF1fMfdtLQ3uluB5X8=" }, "public": { "type": "Buffer", "data": "28ZTgzQrp1B63LY1543Itf4pFlqtNzDZReQzh1E84lU=" } }, "4": { "private": { "type": "Buffer", "data": "YJqFY34e+rSIeRRv6o8hmLAA2CM3BmyvW5kqBvq9T0E=" }, "public": { "type": "Buffer", "data": "f5N+PR7f0VXolxjQZxv+jPweM8LznL82zVGCVOWQBHc=" } }, "5": { "private": { "type": "Buffer", "data": "WGTU9+6RtjUFFldkoYzwI1YfYYGE7VZYKoqcEv7roV0=" }, "public": { "type": "Buffer", "data": "p7fyFx4zpnk6zwkKl5pa85bpQHomJI6SoTPPj4Lf2ls=" } }, "6": { "private": { "type": "Buffer", "data": "uJAuLGoCi2Lg4w8HY7jKT0sikWnwRrubPV2piHxdmHI=" }, "public": { "type": "Buffer", "data": "fGt1tYrAiTbddpu0dnoZzIbjUeBWBZYS/nve7ROD61Q=" } }, "7": { "private": { "type": "Buffer", "data": "iASLoP+Atw2CDAl30ZdqavSRNUL9OmUE0Q+RAMjjPVs=" }, "public": { "type": "Buffer", "data": "B0vaC9qHz3DsC14PI2FFbEz44zLNDQ4Od8+Qq9dDkGY=" } }, "8": { "private": { "type": "Buffer", "data": "AMiP3tV9mptSjudGBnwDsTmISijCE0NNjY2iHk2DIUA=" }, "public": { "type": "Buffer", "data": "vFbSRa35yeFYKhR9EhX6tlfn08784K2Adxn54BLf8ws=" } }, "9": { "private": { "type": "Buffer", "data": "IPrnOlVXATeumWiyWl6qwvgZZrlaOKeKFZDCGQt+V0c=" }, "public": { "type": "Buffer", "data": "NJhxjZBFCmWtkbTzcz1lu97dQSpoXRn+u7dqEVUXrSY=" } }, "10": { "private": { "type": "Buffer", "data": "CNcXjeTmtoA0BlNVFJeKL59GCKdTfSyc/ssNThYlQFI=" }, "public": { "type": "Buffer", "data": "zC2n1PgxYn08Wk6BxQaYTiWjDQUY8x03NFBu8FZq4Uk=" } }, "11": { "private": { "type": "Buffer", "data": "kB8wJvwrHd/qtw8fyq7KjUs3bCeI+vmIcvbgBWyLZUU=" }, "public": { "type": "Buffer", "data": "Kk7Fg2nY5k+TquqVCZhFdQJGlbitU2mizEzB5ld1nCo=" } }, "12": { "private": { "type": "Buffer", "data": "6NuL9zXbqEpwATYQ4aOA55Uw2qAk9ke9S/91Ps0A/Wo=" }, "public": { "type": "Buffer", "data": "EMHP5Rl8rj6G39YJJVGkdhvdcRlMxr1QyuYyuRlHwDE=" } }, "13": { "private": { "type": "Buffer", "data": "iNUwTIVYd7ZXHxaOY0j+e7+XPiW01RY2Kfh4gr49vXo=" }, "public": { "type": "Buffer", "data": "aLbSkl8AS3mhkZgJ10YnrNE1El5O2C21kmX8Pc9GmTc=" } }, "14": { "private": { "type": "Buffer", "data": "QFYsCieUmUymmu8Dx0TCWUbfUsXxNRE2QkgQ86gxlX0=" }, "public": { "type": "Buffer", "data": "fDCqCAOYUXx0E3+hFk7wedBJvYk4IEFNWarKhsLwTEQ=" } }, "15": { "private": { "type": "Buffer", "data": "cGbhCotIHQt2nF+rvbQZl1KaGsXEMVk0OwYSHh94f14=" }, "public": { "type": "Buffer", "data": "QDZkEGwcBw4Pkv5505fn77SoGXoSKrFyfu45m6CFHk0=" } }, "16": { "private": { "type": "Buffer", "data": "qDsfR/3w/gwZN3Rf3R4yn/yK93kPbu1ZOW+l8pgEAWY=" }, "public": { "type": "Buffer", "data": "z4tZkYj1+FsiH395ZJpnQbus9CwIMYrJ4VC+IPg4oks=" } }, "17": { "private": { "type": "Buffer", "data": "KEkN5puI6D2ySqoCOgDR0fAGVH8iGwiy9crsWz90D2M=" }, "public": { "type": "Buffer", "data": "a2VpWHzjjvY7DznamMmIs8y83TTaFEmsUu2ONLPX3kQ=" } }, "18": { "private": { "type": "Buffer", "data": "SD6ODBGQ23Ery+W4ZwEl/xm04F/kEGs+mMn5JMrI30k=" }, "public": { "type": "Buffer", "data": "9mNfJaFi3/BQjpZjaB4J957aYB1nWp8YHquDBnNtf3U=" } }, "19": null, "20": { "private": { "type": "Buffer", "data": "uFRJerQ9yClcPgq7INlSfbDwcyrXjeryYf6qlXPZB0A=" }, "public": { "type": "Buffer", "data": "QU38y+Ow0zPCgjUCptblysles4LmuJF3oqHeuShKGXQ=" } }, "21": { "private": { "type": "Buffer", "data": "EMP1R9iNtTHZrQU7ESGrxJTJlV+PDNy1v35vBrpdalU=" }, "public": { "type": "Buffer", "data": "KbgIFPj4G4AQ0xPHCMfjTCaLEUA7IBkybxIH/Z7BUAI=" } }, "22": { "private": { "type": "Buffer", "data": "YFlnzTafqvMfCyHgoO2cDkwteKoUn4OhCjMUV3c142A=" }, "public": { "type": "Buffer", "data": "q7CtmQaeh9/ALIlX7VQan+Cq+fdSZ8IVB9x6wn5HFCQ=" } }, "23": { "private": { "type": "Buffer", "data": "GFrW28ilN8pwFQFKPJJtMXAccK6Vj3S90kJVOj8S4n0=" }, "public": { "type": "Buffer", "data": "xPxrIgVhou23+sJpidy5LcbPgYiTk3ggyQJDSeCbyXY=" } }, "24": { "private": { "type": "Buffer", "data": "wBUWw1WSTVeupDTlnFI0a1MRCfVNk3TUxAN8GIpCN24=" }, "public": { "type": "Buffer", "data": "EZShtNBdGhzP1r60BscQYw7fZy6APultqTL7Z0/sCys=" } }, "25": { "private": { "type": "Buffer", "data": "UIVnYFyfFxazrVzfmu0oZ6bFaPaCmL9GPO5/xr9WZ3I=" }, "public": { "type": "Buffer", "data": "49Izb1xHZMDWdhY7w6xZ4mGZh5IJeuimN6qWEYkAWCU=" } }, "26": { "private": { "type": "Buffer", "data": "UDAAoLRUzIztRtFOeTPlcIiz0ABqccE4TWPPF6aqtEU=" }, "public": { "type": "Buffer", "data": "myP5t4vF2YxlbHTe0+jWsdATaI0x1V6ihhoe12/ZKGo=" } }, "27": { "private": { "type": "Buffer", "data": "+L2I+5S5U31RPdpWSNuNHm0m/fVYlwtmy3jVj99MiEg=" }, "public": { "type": "Buffer", "data": "Nsvyapa3zQB4NAYtRGBc5QsSG3zmlAiUe/Kl1VEJGBM=" } }, "28": { "private": { "type": "Buffer", "data": "YOZ/5C7KrfLLOnBGgLq/zHlwr391ow/8NhaBl5Pd4HM=" }, "public": { "type": "Buffer", "data": "qqLN6vFbJNPIXybFx9ZlD8U3XvZvpjmnLZ6aSdcHI3g=" } }, "29": { "private": { "type": "Buffer", "data": "mG0mbXEKLWr3UYLyacEwUf0wbuFMYKu1Y5rER4JzRV4=" }, "public": { "type": "Buffer", "data": "dTYHGieWXNR6ULk5WT+b3f5MOl8kVyGhyUcr2mNAYRM=" } }, "30": { "private": { "type": "Buffer", "data": "gKl+XB7wc4mz24zmMXn0je7VM1dXMrGd4FpEq7EUIGE=" }, "public": { "type": "Buffer", "data": "T+ynxYLha4nkVwST4Wac3xYeBAiWZjXBFp4VgoMHN1o=" } } }, "sessions": { "94771505222.0": { "_sessions": { "BbvZ78Mx4K/AMiQxbVKXQb3mimxET66A8ni1wCcq6v5t": { "registrationId": 751728283, "currentRatchet": { "ephemeralKeyPair": { "pubKey": "Bfz44iRsbkpwoRq2x4lkn02q0o2wKnRKBpADQDhKMFo9", "privKey": "uIdaxvQoWBHiKnIsigW5uD18nhiQBdzyx6g3QJkmUmo=" }, "lastRemoteEphemeralKey": "BSGd5Xr/DafoUHq7WFXPC1R1qa7ss0vNxanRNmXioNVn", "previousCounter": 0, "rootKey": "RP4CTtxCm1F24xS0UUTHvAPVJXJqzJSx1zRO2hrnPuo=" }, "indexInfo": { "baseKey": "BbvZ78Mx4K/AMiQxbVKXQb3mimxET66A8ni1wCcq6v5t", "baseKeyType": 2, "closed": -1, "used": 1682082051646, "created": 1682082051646, "remoteIdentityKey": "BbXV6aXf6wgeWaHhGvt/bHOnZKXgbbeFTuc7PU0iQe8q" }, "_chains": { "BSGd5Xr/DafoUHq7WFXPC1R1qa7ss0vNxanRNmXioNVn": { "chainKey": { "counter": 8, "key": "SPfAqrUXmGHpTBADFytOBi7WWG3Cyt0m6xcQAGoTyN8=" }, "chainType": 2, "messageKeys": {} }, "Bfz44iRsbkpwoRq2x4lkn02q0o2wKnRKBpADQDhKMFo9": { "chainKey": { "counter": -1, "key": "cDfhEWM6s9MIfaLp1ND3HKMTqG6LoG37U8cY3Gdt7/0=" }, "chainType": 1, "messageKeys": {} } } } }, "version": "v1" } }, "appStateSyncKeys": { "AAAAAIiT": { "keyData": "zDMEFi/1X5AeEIDLpuzuBmi6Tx2Dc2VGq4yChNH4rlg=", "fingerprint": { "rawId": 1077775220, "currentIndex": 3, "deviceIndexes": [ 0, 1 ] }, "timestamp": "0" }, "AAAAAIiU": { "keyData": "dCV5VfHSYJKR3jQ7r/xEzt2SqNbkgQi4Vcb9Aa7PxNo=", "fingerprint": { "rawId": 1077775220, "currentIndex": 3, "deviceIndexes": [ 0 ] }, "timestamp": "1682081838561" }, "AAAAAIiS": { "keyData": "UtuCHi8Lyil1AXO11U2z2H0m+t4ae53AdDPLcDrem60=", "fingerprint": { "rawId": 1077775220, "currentIndex": 1, "deviceIndexes": [ 0, 1 ] }, "timestamp": "1682080508353" }, "AAAAAIiV": { "keyData": "l8GlICYk01aOQ8AH8VKjZsgMmzGjUUjPSqd+G4JGWYE=", "fingerprint": { "rawId": 1077775224, "currentIndex": 1, "deviceIndexes": [ 0, 1 ] }, "timestamp": "1682082052236" } }, "appStateVersions": { "regular": { "version": 5, "hash": { "type": "Buffer", "data": "Y922DSb0+Bb/VPYvyJBns9SnFz4wqTpLGBEqtj1s97aKGh+yC7eBn3B14F6b6EcMiOh/IGlakLPDcwkqq4yGyGpGEwNts0Pp7JETaUvnpvdfBH2ExPZ2tNmG5UO6HhPzpaZ0A0GQd5clAMxpuiZEFRNebXPCALHwNIDCm/RdCo4=" }, "indexValueMap": { "92o+DU/lSqUbChyerPwXDi3rdRy7vg1STpgP3sslFAE=": { "valueMac": { "type": "Buffer", "data": "lYzlM5ZpVshF+a1WU9qIgDaXyfwWSkIh4r/5JnoJanE=" } }, "l0mX19hIy2JEouZAvSD3sbWph7w/oCaLqXCz/9qdaBY=": { "valueMac": { "type": "Buffer", "data": "c5/Z6HaMPEzekVyvL6p+zskjXkNUS15t1fkpE90zSdQ=" } }, "5jDWgLadySC3jff++nIhi0qfpmkSj9hMgaFX+zx4MpM=": { "valueMac": { "type": "Buffer", "data": "/jk2SSE8SqbhUFg2o8Z+drIGkXkS3Qc6QLaOkwa7wBc=" } }, "dMjafj8DE0Vb0+EvOm1FouXgcn1H2atO70QHYBLoeP4=": { "valueMac": { "type": "Buffer", "data": "OV16n8hdv6w693ghcVOGzMmbvOJRj350w3qk7BpDh88=" } }, "UJ7ZeIz/bKtiTrzGUiTAs18cw20wabDAuTjp+ydCEtI=": { "valueMac": { "type": "Buffer", "data": "Fyf883TpQBgCcmOX1MVf63s8vpTlOZ8tpHm0z+tbzeI=" } }, "64seOsyoTAVKX5rGtiRAn2jaQmRvc5PbUFT9IAAACPk=": { "valueMac": { "type": "Buffer", "data": "0k8VQO8zJzMFPmvahKwiSd0HMtyYT1CHmZPBYVYsTUY=" } }, "rR0qUtRtdO7aHENF1hjGttcKQbYixoTGTArs1YPZx+A=": { "valueMac": { "type": "Buffer", "data": "xc1tp9SRuOihupgJ3Inz7Raf8SRsAAbNnTNX0d/WxM8=" } }, "ELaDDRoLEwDltwkesOlRV9spzb8EiYsGK6Q7V9Y2z/w=": { "valueMac": { "type": "Buffer", "data": "GUKFCCnBAnUm/sRHDKeW7y8JCOR4X0qg8YCfvfIReI8=" } }, "XsL3rg8LQo3FHG5OTAdOV/Hgthgr6vBditezHNBTFWw=": { "valueMac": { "type": "Buffer", "data": "nqDlE2kHqvET7dYpikSEyUpYI7lVoCDXblel0TYyYaU=" } }, "KIpvHPU13GCwKFTJSG5tf8MXc8k7HDSsXkoKqNseL9I=": { "valueMac": { "type": "Buffer", "data": "MUvIEWyLcCdcv20RY907Xln2NOW0GnYMDb4PcqhI6vs=" } } } } } } }'
global.antitags = false
global.prefa = ['','!','.','😂','❤️','💠'] //Command Prefix eg:(.alive ,alive 😂alive)
global.sp = '💠'
global.mess = {
    success: 'Done ✅',
    admin: 'Only Admins can use it!😉',
    botAdmin: 'Bot wants to be an Admin😥',
    owner: 'Only Owner can use this!😉',
    group: 'Feature Used Only For Groups!',
    private: 'This Features Only For Private Chat!',
    bot: 'This Feature Is Only For Bot😝',
    wait: '👉👈Pleas Wait...',
    error: 'Error!!! Maybe Api Key Is Expired🤔!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    linkm: 'Where is the link?',
    nsfw: 'The nsfw feature has not been activated, please contact the admin to activate',
    banChat: 'The bot was banned in this group, please contact the owner to unban',
    badwords: '*🚫Bad Words Not Allowed Here !*\n\n⚠️ Warning... ⚠️',
    spam: '⚠️ [SPAM] Detected ⚠️\n\nThe emergency security system was activated.\n\nPowered By: *ʀᴇᴅ-ᴅʀᴀɢᴏɴ*',
    caption: 'Generated by: ◉ *ʀᴇᴅ-ᴅʀᴀɢᴏɴ-ʙᴏᴛ*'
} // END \\
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thum = fs.readFileSync("./Android/AllData/theme/repl.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./Android/AllData/theme/repl.jpg") //ur logo pic
global.err4r = fs.readFileSync("./Android/AllData/theme/repl.jpg") //ur error pic
global.thumb = fs.readFileSync("./Android/AllData/theme/repl.jpg") //ur thumb pic

global.thumb = fs.readFileSync('./Android/AllData/theme/repl.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []





































// DO NOT CHANGE THIS. ERROR WARNING දාන්න තැනක් නැතුව මෙතන දැම්මෙ.
global.rep = { // All Replies = 145
    K1: '🫢හායි😁❤️',
    K2: '🤭හූයි✌️💞🫶',
    K3: '😉🫶හායි😂',
    K4: '🥴හූයි😊',
    K5: '😂හේයි, හව් ආ යූ🥴✌️',
    K6: '😁Hey there💝 I am WhatsApp Bot😏',
    K7: '❣️ඇයි හලෝ😌',
    K8: '🙃මොකෝ හලෝ🥲',
    K9: '😒මොකෝ?',
    K10: '🥺ඇයි අනේ?❤️🫢',
    K11: '🌝❤️',
    K12: '😜හී හී😁හූ හූ',
    K13: '😁හී හී💞',
    K14: '😊හූ...',
    K15: 'ඇයි🥲',
    K16: '😂😂✌️',
    K17: '😐ආහ්',
    K18: 'චූටී තමයි😇',
    K19: '🥺🥺ඇයි සුදූ❤️💓',
    K20: 'කොහොමවත් නෑ ඉතිං😒',
    K21: '😁මන් දන්නෑ🥲',
    K22: 'හොඳයි තමා😌',
    K23: '😂😂මරු හැබැයි',
    K24: 'මලු🙃',
    K25: '😘😇❤️',
    K26: '😘😘මෙන්න ඔයාට💕',
    K27: '😊ඇත්තමද?❤️',
    K28: '☺️👻ඔය ඇත්තමද❤️',
    K29: 'ඇයි🙄',
    K30: '🥺✌️සිදෙනවද?',
    K31: '😐💔ඕවට එන්න එපා හරිත😒',
    K32: '😏අනේ මේ😒 යනෝ යන්න💔',
    K33: 'ඔයා තමයි හොරා😒 මගෙ හිත හොරකම් කළානෙ ඉතිං😌',
    K34: '😇මොකො හූම් ගාන්නෙ😒 බකමූනා',
    K35: '​😁😁මොකෝ හලෝ හූම් හූම් ගාන්නෙ?',
    K36: '😉නෑ අනේ මුකුත් නෑ😐🫠',
    K37: '😒ආහ්',
    K38: '✌️ඔව් නං එච්චරයි😌',
    K39: '😐හේ හේ නැද්ද?🫣',
    K40: '🙄මොනවටද ආස?',
    K41: '😌මාත් ආසයි😊💞',
    K42: 'එල😌',
    K43: 'බැරි නං නිකං ඉන්න😏',
    K44: '😂😂💔',
    K45: 'සුදුයි තමයි ඇයි මොකද?🙄',
    K46: '😇තාම කෑවෙ නෑ අනේ🥺',
    K47: 'බොන්නෑ😒',
    K48: 'නිදිමත නං දිදාගන්නකො වද දෙන්නැතුව😒😌❤️',
    K49: '😇දැම්ම නිදාගන්න බෑ අනේ😜 නිදිමත නෑ😁💞',
    K50: '😉මුකුත් නෑ අනේ🫡',
    K51: 'මොකද්ද දන්නෑ🥲',
    K52: '😝මම නං මුකුත් කරන්නෑ අනේ😁 ඔයාලා දිහා බලන් ඉන්නවා😌',
    K53: '🥺පාලුයි අනේ. අපි සෙල්ලමක් කරමුද?😊✌️',
    K54: '😌😁ආදරෙයි❤️',
    K55: '😌ආදලෙයි ඉතිං❤️❤️',
    K56: '🥺🥺ඇත්තද?',
    K57: '🥺අනේ ඒ මොකද?🥴',
    K58: '😒මටත් දුකයි ඒ ගැන😕',
    K59: '🤭ඉන්න බෑ අනේ😜',
    K60: '🫡මොකද අඬන්නෙ?😒',
    K61: '😉මොකද අයියෝ😂',
    K62: '😐මුකුත් දන්නැති අහින්සක මම😕💔',
    K63: '🚲හා යමු යමු😌',
    K64: '🥴දෙන්න බෑ😒',
    K65: '🙏පස්සෙ දෙන්නං🥲',
    K66: '😁බඩගිනි නෑ❤️😒',
    K67: '😳අම්මෝ හා හා🙏',
    K68: '😂ඇයි යකෝ😉😈',
    K69: '👻ඇයි හුයි😁 කෝං ගහේ නයි😂',
    K70: '🥲දන්නැත්තං නිකං ඉන්න😜',
    K71: '😂අපි තමයි හොඳටම කරේ🥲\n🤧රෙද්ද තමයි😂',
    K72: '🙄ආ හා 😏ගහපන් බලන්න💔👎',
    K73: 'හී😂😂😂💓',
    K74: 'වන්ඩර්පුල්🥲😂',
    K75: '😂ඕං බලන්නකො ඒකෙත් හැටි නේද🥴😂',
    K76: '😌එල',
    K77: '🥲මොකෝ ඩෝ😉❣️',
    K78: 'අඩෙහ්🙃😹',
    K79: 'ඔය කිව්වට ලොකු නෑ හොඳේ😏',
    K80: '😹මම නං පොඩී තමයි ඉතිං😌',
    K81: '🥴ටිකයි ද?😂',
    K82: '🥴ඒකි එහෙම නෑ බන්😅',
    K83: '🥲ඌ මොකද්ද කරේ?',
    K84: '😂එහෙම කියන්න එපා එයාලා පව්නෙ😐🤭',
    K85: 'හුම්ම්😌 පව් ඉතිං😂',
    K86: 'හා😒 කියනකං තමයි හිටියෙ🙏❣️',
    K87: 'මන් දන්නෑ🥲',
    K88: '  👀  ',
    K89: '🥺ගිහින් බේත් ගන්න',
    K90: '🥺ගොඩක් අමාරුද?☝️',
    K91: 'DSI පාරක් කන්න ආසද?😂',
    K92: 'කලිසම ගලවනෝකො ඉතිං😒',
    K93: 'අත ලෙප්ට්🥲',
    K94: '🫢🫢හරි නරකයි😒',
    K95: '😌මම නං කොහොමත් අහින්සකයි රටක් වටී😁❤️',
    K96: 'අතේ...🥲🥲🥲🥲🥲🥲',
    K97: '😐දාන්න බෑ😒',
    K98: '📱🔌පෝන එක චාජ් එකට ගහලා ඔය ළමයා ගිහින් වැඩක් කරගන්න😉',
    K99: '🫢🤭ඇයි? අසහනේ ද?🤨😏💔',
    K100: '💔පෙම් සිත රිදුනා සත්තලනේ🥺🤧',
    K101: '😹😹☝️',
    K102: 'බල්ලා පූසා මීයා හාවා නරියා අලියා😒',
    K103: '🥲උරුලා ගති තමා',
    K104: '😐කියන්න බෑ😒 ඇයි මොකෝ?🙄',
    K105: '😐අපි පැනල යමුද?🤭🫢',
    K106: '☝️ගියා නං ආයි එන්නෙපා😒',
    K107: '😅✌️😝',
    K108: '😂😂විහිලු නං කමක් නෑ😌',
    K109: 'මං තරහයි😒 ඇයි මොකෝ?👎',
    K110: 'ඇයි පකෝ🥲',
    K111: 'ලබ්බ😒',
    K112: 'මොන හුම්තක්ද යකෝ?🙄',
    K113: '😒පලෑන්න පොන්නය💔',
    K114: '🥲💔🙏',
    K115: '🥲🥲💔☝️',
    K116: '😏😑එන්නෙපා ගෑනි ගාගෙන🤨💔💔💔',
    K117: 'දැන්ම බෑ ළමයෝ🤭🤭 පස්සෙ දෙන්නං😝😒',
    K118: 'මොන පකක්ද?😒',
    K119: '😒👎',
    K120: 'එහෙම කියන්නෙපා පව්නෙ😒',
    K121: '🫢🙄',
    K122: 'අනේ තෝ හුකාගනිං🙂💔',
    K123: '😐උක්කමු😒😂😂',
    K124: 'ඇයි🙄 පුකද බලන්නෙ?',
    K125: 'උබේ දෙක ද?😂',
    K126: 'උබේ ද?😂',
    K127: '🥲මං ඇවිත් කටට ගන්නද?😒😝',
    K128: '😂😂හමෝ',
    K129: '😏ඕන්නැත්තං නිකං ඉන්න',
    K130: '🤭නිකං ඉන්න එපා ඇඳුමක් ඇඳගන්න😂❤️',
    K131: '😂😂🙏',
    K132: '😂🤭',
    K133: '😁',
    K134: '😏☝️',
    K135: 'අඬන්න එපා ඉතිං😒😝',
    K136: '🥴පිත්තු',
    K137: '🙂',
    K138: '😌😌',
    K139: '🥲🥲💔',
    K140: '😍🥰😘💞💕💓💗💖❣️❤️',
    K141: '😐🙄',
    K142: '🥺දුක් වෙන්න එපා ඉතිං❤️',
    K143: '🥺🥺😐',
    K144: '❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️',
    K145: '🫡🫠🤝',
    K146: '🎤දහසක් මල්🌸 විකසිත වන😊 මේ හිමිදිරි උදෑසනේ🌄 පතන්නම් ඔබ සැමට🙏 සුභම සුභ උදෑසනක් කියා...😃',
    K147: 'ලබන්නාවූ රාත්‍රිය හීනෙන් හොල්මන් පෙනෙන, මහ රෑ දාඩියෙන් තෙමී ඇහැරෙන, පෙරේතයන් ඇද යටට එන, කුම්භාණ්ඩයින් ජනෙල් වලින් එබී බලන, භයානක රාත්‍රියක් වේවා😂👻👻❤️'
    }






let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
