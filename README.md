เกม Tic Tac Toe

นี่คือเกม Tic Tac Toe ที่พัฒนาขึ้นโดยใช้ HTML, CSS, JavaScript, และ Node.js พร้อมกับ Express เพื่อให้ผู้เล่นสามารถเล่นกันหรือกับบอทได้
สารบัญ

    การติดตั้ง
    การใช้งาน
    ออกแบบและอัลกอริธึม
    เครดิต

การติดตั้ง

เพื่อรันเกม Tic Tac Toe บนเครื่องคอมพิวเตอร์ของคุณ:

    คล๊อนเรพอร์ทอรี่:

    bash

git clone <repository-url>
cd tic-tac-toe

ติดตั้ง dependencies:

ตรวจสอบให้แน่ใจว่าคุณได้ติดตั้ง Node.js ในเครื่องของคุณแล้ว จากนั้นใช้คำสั่ง npm เพื่อติดตั้ง package ที่จำเป็น:

bash

    npm install

การใช้งาน
เริ่มต้นเซิร์ฟเวอร์

เพื่อเริ่มเซิร์ฟเวอร์สำหรับเกม Tic Tac Toe:

bash

node app.js

เซิร์ฟเวอร์จะเริ่มทำงานที่ http://localhost:3000.
เล่นเกม

    เปิดอินเตอร์เฟซเกม:

    เปิดเบราว์เซอร์ของคุณและไปที่ http://localhost:3000.

    อินเตอร์เฟซเกม:
        อินเตอร์เฟซเกมจะแสดงกระดาน Tic Tac Toe
        คลิกที่เซลใดก็ตามเพื่อทำการเล่น ผู้เล่นจะสลับกันเป็น 'X' และ 'O'
        หากเล่นกับบอท, บอทจะทำการเล่นทันทีหลังจากที่ผู้เล่นเคลื่อนไหว
        เกมจะตรวจสอบผู้ชนะหลังจากทุกการเล่น
        ใช้ปุ่ม "Reset Game" เพื่อเริ่มเกมใหม่

ดึงข้อมูลและโหลดเกมที่บันทึกไว้

    เกมช่วยให้คุณดึงข้อมูลและโหลดเกมที่บันทึกไว้ก่อนหน้าได้
    เกมที่บันทึกไว้จะถูกเก็บไว้บนเซิร์ฟเวอร์และสามารถเข้าถึงได้ผ่านอินเตอร์เฟซที่ให้

ออกแบบและอัลกอริธึม
ตรรกะของเกม

    ตรรกะของเกมถูกนำมาใช้ในการพัฒนาโดยใช้ JavaScript ทั้งฝั่งลูกค้า (เบราว์เซอร์) และฝั่งเซิร์ฟเวอร์ (Node.js)
    เซิร์ฟเวอร์จัดการกับการจัดการสถานะของเกม เช่น การอัปเดตกระดาน, การตรวจสอบความถูกต้องของการเล่น, การตรวจสอบผู้ชนะ, การรีเซ็ตเกม, และการบันทึก/โหลดเกม
    อินเตอร์เฟซฝั่งลูกค้าทำงานร่วมกับเซิร์ฟเวอร์โดยใช้การร้องขอ HTTP แบบไม่สะดวก (fetch API) เพื่อทำการเล่น, รีเซ็ตเกม และดึง/โหลดเกมที่บันทึกไว้

บอทเพลเยอร์

    บอทเพลเยอร์พื้นฐาน ('O') ถูกสร้างขึ้นเพื่อเล่นกับผู้เล่น ('X')
    บอททำการเล่นด้วยการเคลื่อนไหวแบบสุ่มภายในเซลที่ว่างในกระดาน
    หลังจากทุกการเคลื่อนไหวของผู้เล่น ถ้าเป็นตาของบอท บอทจะทำการเล่นทันที

เครดิต

    พัฒนาโดย Rittikiat + CHATGPT
    สร้างโดย HTML, CSS, JavaScript, Node.js, Express
