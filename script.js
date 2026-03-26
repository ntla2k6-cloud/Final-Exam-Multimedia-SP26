// ============================================================
// LAE101 QUIZ - SCRIPT.JS (FIXED)
// Fixes: apostrophes escaped, switchTab button selector fixed,
//        wrapped in DOMContentLoaded, safe innerHTML for exp
// ============================================================

const TOPICS = {
  ip: { name:'Intellectual Property Rights', vi:'So Huu Tri Tue',          icon:'IPR',  color:'#4f8ef7' },
  tm: { name:'Trade Mark & Get-Up',          vi:'Nhan Hieu & Thuong Hieu',  icon:'TM',   color:'#7c5af0' },
  cr: { name:'Copyright & Fair Dealing',     vi:'Ban Quyen & Su Dung Hop Ly', icon:'CR', color:'#2dd4f7' },
  dr: { name:'Design Rights',               vi:'Quyen Thiet Ke',            icon:'DR',   color:'#f7c948' },
  sm: { name:'Social Media Law',            vi:'Luat Mang Xa Hoi',          icon:'SM',   color:'#1fd67a' },
  li: { name:'Licensing & Agreements',      vi:'Cap Phep & Hop Dong',       icon:'LI',   color:'#f79348' },
  pr: { name:'Privacy & Data Protection',   vi:'Quyen Rieng Tu & Du Lieu',  icon:'PR',   color:'#f75f5f' },
  la: { name:'Legal Arguments & Ethics',    vi:'Lap Luan Phap Ly & Dao Duc',icon:'LA',   color:'#c084fc' },
};

// ============================================================
// NGAN HANG CAU HOI
// ============================================================
const QDB = {

  ip: [
    { en:"Which international agreement aims to harmonize IP standards?",
      vi:"Hiep dinh quoc te nao nham hai hoa hoa cac tieu chuan so huu tri tue?",
      opts:[{k:'A',en:"Paris Convention",vi:"Cong uoc Paris"},{k:'B',en:"TRIPS Agreement",vi:"Hiep dinh TRIPS"},{k:'C',en:"Berne Convention",vi:"Cong uoc Berne"},{k:'D',en:"Madrid Protocol",vi:"Nghi dinh thu Madrid"}],
      ans:'B', exp:"<strong>Hiep dinh TRIPS</strong> (Trade-Related Aspects of Intellectual Property Rights) la hiep dinh toan dien nhat thiet lap cac tieu chuan toi thieu ve bao ho va thuc thi quyen so huu tri tue tren pham vi toan cau." },

    { en:"Which organization enforces the TRIPS Agreement?",
      vi:"To chuc nao thuc thi Hiep dinh TRIPS?",
      opts:[{k:'A',en:"World Health Organization (WHO)",vi:"To chuc Y te The gioi (WHO)"},{k:'B',en:"World Trade Organization (WTO)",vi:"To chuc Thuong mai The gioi (WTO)"},{k:'C',en:"United Nations (UN)",vi:"Lien Hop Quoc (UN)"},{k:'D',en:"World Intellectual Property Organization (WIPO)",vi:"To chuc So huu Tri tue The gioi (WIPO)"}],
      ans:'B', exp:"<strong>WTO</strong> la co quan quan ly va co co che giai quyet tranh chap de dam bao cac quoc gia thanh vien tuan thu cac quy dinh cua Hiep dinh TRIPS." },

    { en:"What do patents primarily protect?",
      vi:"Bang sang che chu yeu bao ve dieu gi?",
      opts:[{k:'A',en:"Original literary works",vi:"Cac tac pham van hoc goc"},{k:'B',en:"Brand names and logos",vi:"Ten thuong hieu va logo"},{k:'C',en:"Inventions and new technical solutions",vi:"Cac phat minh va giai phap ky thuat moi"},{k:'D',en:"The visual design of a product",vi:"Thiet ke truc quan cua mot san pham"}],
      ans:'C', exp:"<strong>Bang sang che (Patents)</strong> duoc cap rieng cho cac phat minh, quy trinh hoac giai phap ky thuat moi co kha nang ap dung vao cong nghiep." },

    { en:"What do trademarks protect?",
      vi:"Nhan hieu bao ve dieu gi?",
      opts:[{k:'A',en:"Literary works",vi:"Tac pham van hoc"},{k:'B',en:"Brand names, logos, and symbols",vi:"Ten thuong hieu, logo va bieu tuong"},{k:'C',en:"Technical inventions",vi:"Cac phat minh ky thuat"},{k:'D',en:"Trade secrets",vi:"Bi mat thuong mai"}],
      ans:'B', exp:"<strong>Nhan hieu (Trademarks)</strong> bao ve cac dau hieu nhan dien giup nguoi tieu dung phan biet hang hoa/dich vu cua doanh nghiep nay voi doanh nghiep khac." },

    { en:"What does copyright protect?",
      vi:"Ban quyen bao ve dieu gi?",
      opts:[{k:'A',en:"Ideas and concepts",vi:"Y tuong va khai niem"},{k:'B',en:"Original literary, artistic, and musical works",vi:"Cac tac pham van hoc, nghe thuat va am nhac goc"},{k:'C',en:"Industrial machines",vi:"May moc cong nghiep"},{k:'D',en:"Company names",vi:"Ten cong ty"}],
      ans:'B', exp:"<strong>Ban quyen (Copyright)</strong> bao ve cach the hien cua mot y tuong duoi dang cac tac pham van hoc, nghe thuat, am nhac, phim anh... chu khong bao ve ban than y tuong do." },

    { en:"What is the primary function of a trademark?",
      vi:"Chuc nang chinh cua nhan hieu la gi?",
      opts:[{k:'A',en:"To reward inventors",vi:"De khen thuong cac nha phat minh"},{k:'B',en:"To identify the source of goods or services and prevent consumer confusion",vi:"De xac dinh nguon goc cua hang hoa hoac dich vu va ngan ngua su nham lan cua nguoi tieu dung"},{k:'C',en:"To protect private information",vi:"De bao ve thong tin rieng tu"},{k:'D',en:"To encourage reading",vi:"De khuyen khich viec doc sach"}],
      ans:'B', exp:"Muc dich cot loi cua nhan hieu la giup khach hang nhan dien chinh xac ai la nguoi cung cap san pham/dich vu, tu do tranh viec mua nham hang gia, hang nhai." },

    { en:"What is the main purpose of the patent system?",
      vi:"Muc dich chinh cua he thong bang sang che la gi?",
      opts:[{k:'A',en:"To keep inventions secret forever",vi:"De giu bi mat cac phat minh mai mai"},{k:'B',en:"To encourage innovation by granting inventors a temporary monopoly in exchange for public disclosure",vi:"De khuyen khich doi moi bang cach cap doc quyen tam thoi de doi lay viec cong bo cong khai phat minh"},{k:'C',en:"To control the price of goods",vi:"De kiem soat gia ca hang hoa"},{k:'D',en:"To replace trademarks",vi:"De thay the nhan hieu"}],
      ans:'B', exp:"He thong bang sang che la mot 'ban hop dong': nha phat minh duoc <strong>doc quyen khai thac (thuong 20 nam)</strong>, bu lai ho phai cong khai chi tiet ky thuat de xa hoi co the hoc hoi va tiep tuc phat trien." },

    { en:"What can overly strict IP enforcement lead to?",
      vi:"Viec thuc thi IP qua nghiem ngat co the dan den dieu gi?",
      opts:[{k:'A',en:"Creative freedom",vi:"Tu do sang tao"},{k:'B',en:"Stifled innovation and reduced idea sharing",vi:"Kim ham doi moi va giam chia se y tuong"},{k:'C',en:"Economic growth",vi:"Tang truong kinh te"},{k:'D',en:"Clear fair use guidelines",vi:"Huong dan su dung hop ly ro rang"}],
      ans:'B', exp:"Khi IP duoc thuc thi qua cung nhac, no co the <strong>kim ham doi moi</strong> vi moi nguoi so bi kien khi su dung hoac phat trien y tuong dua tren y tuong hien co." },

    { en:"How does IPR affect international trade agreements?",
      vi:"Quyen so huu tri tue anh huong den cac hiep dinh thuong mai quoc te nhu the nao?",
      opts:[{k:'A',en:"It restricts tariffs",vi:"No han che thue quan"},{k:'B',en:"It ensures fair competition and market protection",vi:"No dam bao canh tranh cong bang va bao ve thi truong"},{k:'C',en:"It allows countries to bypass patent laws",vi:"No cho phep cac nuoc bo qua luat sang che"},{k:'D',en:"It removes barriers to all product sales",vi:"No loai bo rao can cho tat ca hang hoa"}],
      ans:'B', exp:"IPR trong thuong mai quoc te giup <strong>dam bao canh tranh cong bang</strong> - ngan chan hang gia, bao ve thuong hieu va cong nghe khi kinh doanh xuyen bien gioi." },

    { en:"When is overlapping protection most advantageous?",
      vi:"Khi nao thi viec bao ho chong lan mang lai loi the lon nhat?",
      opts:[{k:'A',en:"When a product is cheap",vi:"Khi mot san pham co gia re"},{k:'B',en:"When a product embodies multiple intellectual assets, like design and technology",vi:"Khi mot san pham chua dung nhieu tai san tri tue, chang han nhu thiet ke va cong nghe"},{k:'C',en:"When a product is digital only",vi:"Khi mot san pham chi co dang ky thuat so"},{k:'D',en:"When it is a simple idea",vi:"Khi no la mot y tuong don gian"}],
      ans:'B', exp:"Bao ho chong lan phat huy suc manh toi da cho cac san pham cong nghe cao - hinh dang duoc bao ve boi <strong>Design Right</strong>, vi mach boi <strong>Patent</strong>, phan mem boi <strong>Copyright</strong>." },
  ],

  tm: [
    { en:"Which of the following would likely NOT result in trade mark infringement?",
      vi:"Dieu nao sau day KHONG dan den vi pham nhan hieu?",
      opts:[{k:'A',en:"Direct copying",vi:"Sao chep truc tiep"},{k:'B',en:"Different industries with no consumer confusion",vi:"Nganh khac nhau, nguoi dung khong bi nham lan"},{k:'C',en:"Confusingly similar logo",vi:"Logo gay nham lan"},{k:'D',en:"Unauthorized use in ads",vi:"Su dung trai phep trong quang cao"}],
      ans:'B', exp:"Vi pham nhan hieu can co <strong>nguy co gay nham lan cho nguoi tieu dung</strong>. Neu hai cong ty o nganh hoan toan khac va khong ai bi nham lan thi khong co vi pham." },

    { en:"Which is NOT one of the three elements required for passing-off?",
      vi:"Dieu nao KHONG phai la 1 trong 3 yeu to bat buoc cua 'passing-off'?",
      opts:[{k:'A',en:"Reputation",vi:"Danh tieng"},{k:'B',en:"Misrepresentation",vi:"Su gian doi/gay nham lan"},{k:'C',en:"Patentability",vi:"Kha nang duoc cap bang sang che"},{k:'D',en:"Damage",vi:"Thiet hai"}],
      ans:'C', exp:"Ba yeu to cua passing-off: <strong>Reputation</strong>, <strong>Misrepresentation</strong>, <strong>Damage</strong>. Patentability thuoc luat sang che, khong lien quan." },

    { en:"What is the purpose of the legal concept of passing-off?",
      vi:"Muc dich cua khai niem phap ly 'passing-off' la gi?",
      opts:[{k:'A',en:"To allow free competition",vi:"De cho phep canh tranh tu do"},{k:'B',en:"To prevent businesses from misrepresenting their goods as another's",vi:"De ngan chan doanh nghiep xuyen tac hang hoa cua ho la cua nguoi khac"},{k:'C',en:"To register a trade mark",vi:"De dang ky nhan hieu"},{k:'D',en:"To stop copyright infringement",vi:"De ngan vi pham ban quyen"}],
      ans:'B', exp:"Muc dich cot loi cua passing-off la <strong>bao ve nguoi tieu dung va doanh nghiep chan chinh</strong> khoi hanh vi treo dau de ban thit cho - co tinh lam khach hang mua nham." },

    { en:"Which of the following is a non-traditional trade mark?",
      vi:"Dieu nao sau day la nhan hieu phi truyen thong?",
      opts:[{k:'A',en:"Product weight",vi:"Trong luong san pham"},{k:'B',en:"Sound or smell",vi:"Am thanh hoac mui huong"},{k:'C',en:"Barcode",vi:"Ma vach"},{k:'D',en:"Business license",vi:"Giay phep kinh doanh"}],
      ans:'B', exp:"<strong>Nhan hieu phi truyen thong</strong> bao gom am thanh (nhu nhac hieu Intel), mui huong, mau sac dac trung - nhung yeu to co the phan biet san pham du khong phai logo hay chu." },

    { en:"What is the term 'get-up' commonly used to describe?",
      vi:"Thuat ngu 'get-up' thuong dung de mo ta dieu gi?",
      opts:[{k:'A',en:"The overall visual appearance and presentation of a product",vi:"Tong the dien mao truc quan va cach trinh bay san pham"},{k:'B',en:"Business model",vi:"Mo hinh kinh doanh"},{k:'C',en:"Trade mark certificates",vi:"Chung nhan nhan hieu"},{k:'D',en:"Financial structure",vi:"Co cau tai chinh"}],
      ans:'A', exp:"<strong>Get-up</strong> bao gom toan bo 've be ngoai' dac trung cua san pham - mau sac bao bi, hinh dang chai lo, font chu - co the duoc bao ve qua luat passing-off du khong dang ky nhan hieu." },

    { en:"What is the main difference between trade mark and get-up protection?",
      vi:"Su khac biet chinh giua bao ho nhan hieu va get-up la gi?",
      opts:[{k:'A',en:"Functionality scope",vi:"Pham vi chuc nang"},{k:'B',en:"Duration",vi:"Thoi han"},{k:'C',en:"Get-up does not require registration",vi:"Get-up khong yeu cau dang ky"},{k:'D',en:"Country of origin",vi:"Quoc gia xuat xu"}],
      ans:'C', exp:"<strong>Nhan hieu</strong> can dang ky voi nha nuoc. <strong>Get-up</strong> tu dong phat sinh nho su dung thuc te va su cong nhan cua khach hang, hoan toan khong can thu tuc dang ky." },

    { en:"Why are non-traditional marks (e.g., smell or color) difficult to register?",
      vi:"Tai sao nhan hieu phi truyen thong (mui, mau) kho dang ky?",
      opts:[{k:'A',en:"They are offensive",vi:"Chung gay kho chiu"},{k:'B',en:"They are difficult to represent graphically and prove distinctiveness",vi:"Kho bieu dien bang do hoa va chung minh su khac biet"},{k:'C',en:"They're expensive to file",vi:"Ton kem khi nop don"},{k:'D',en:"They don't last long",vi:"Khong ton tai lau"}],
      ans:'B', exp:"Co quan cap nhan hieu yeu cau ban mo ta ro rang. Viec ve mot 'mui huong' tren giay la dieu khong tuong. Ngoai ra rat kho chung minh mot mau don thuan co du <strong>tinh phan biet</strong> trong tam tri nguoi tieu dung." },

    { en:"When is passing-off unlikely to succeed?",
      vi:"Khi nao kien passing-off it co kha nang thanh cong?",
      opts:[{k:'A',en:"If there is no confusion between the businesses",vi:"Neu khong co su nham lan giua hai doanh nghiep"},{k:'B',en:"If the brands look different",vi:"Neu thuong hieu trong khac nhau"},{k:'C',en:"If colors match",vi:"Neu mau sac giong nhau"},{k:'D',en:"If slogans are similar",vi:"Neu khau hieu tuong tu"}],
      ans:'A', exp:"Cot loi cua passing-off la <strong>nguy co nham lan (confusion)</strong>. Neu khong co khach hang nao bi lu lan giua hai doanh nghiep, vu kien se that bai." },

    { en:"What does 'goodwill' mean in trade mark law?",
      vi:"'Goodwill' co nghia gi trong luat nhan hieu?",
      opts:[{k:'A',en:"Product quantity",vi:"So luong san pham"},{k:'B',en:"Customer loyalty and brand reputation",vi:"Long trung thanh cua khach hang va uy tin thuong hieu"},{k:'C',en:"Trademark length",vi:"Chieu dai cua nhan hieu"},{k:'D',en:"Employee reviews",vi:"Danh gia cua nhan vien"}],
      ans:'B', exp:"<strong>Goodwill</strong> la tai san vo hinh - muc do tin tuong va trung thanh ma khach hang danh cho thuong hieu. Day la nen mong cua vu kien passing-off." },

    { en:"Consumer confusion may occur even when:",
      vi:"Su nham lan cua nguoi tieu dung co the xay ra ngay ca khi:",
      opts:[{k:'A',en:"No product is sold",vi:"Khong co san pham nao duoc ban"},{k:'B',en:"Only a part of the get-up is copied",vi:"Chi mot phan get-up bi sao chep"},{k:'C',en:"The brand is unique",vi:"Thuong hieu la doc nhat"},{k:'D',en:"The packaging color differs",vi:"Mau sac bao bi khac nhau"}],
      ans:'B', exp:"Ngay ca khi <strong>chi sao chep mot phan</strong> dac trung (hinh dang chai, mau sac dac trung), nguoi tieu dung van co the bi nham lan - va dieu do du de kien passing-off." },

    { en:"What is the legal standard for proving 'likelihood of confusion' in trademarks?",
      vi:"Tieu chuan phap ly de chung minh 'kha nang gay nham lan' trong nhan hieu la gi?",
      opts:[{k:'A',en:"Consumers must actually be confused",vi:"Nguoi tieu dung phai thuc su bi nham lan"},{k:'B',en:"It is enough to show that an ordinary consumer is likely to be confused",vi:"Chi can chung minh rang mot nguoi tieu dung binh thuong co kha nang bi nham lan la du"},{k:'C',en:"The infringer must admit to copying",vi:"Nguoi vi pham phai thua nhan sao chep"},{k:'D',en:"Both products must be identical",vi:"Ca hai san pham phai giong het nhau"}],
      ans:'B', exp:"Phap luat khong yeu cau phai tim ra khach hang thuc su mua nham. Chi can chung minh <strong>kha nang cao</strong> mot nguoi tieu dung binh thuong se bi nham lan la du de thang kien." },

    { en:"What does 'reputation' mean in a passing-off case?",
      vi:"'Danh tieng' co y nghia gi trong vu kien passing-off?",
      opts:[{k:'A',en:"The business is well-known globally",vi:"Doanh nghiep noi tieng toan cau"},{k:'B',en:"The business has a specific level of goodwill among consumers in a certain territory",vi:"Doanh nghiep co muc do goodwill nhat dinh doi voi nguoi tieu dung trong mot khu vuc"},{k:'C',en:"The owner is a celebrity",vi:"Chu so huu la nguoi noi tieng"},{k:'D',en:"The business has many followers on Instagram",vi:"Doanh nghiep co nhieu nguoi theo doi tren Instagram"}],
      ans:'B', exp:"Khong can noi tieng khap the gioi. Chi can o <strong>khu vuc ban dang kinh doanh</strong>, khach hang nhan ra va tin tuong thuong hieu cua ban, la du dieu kien kien ke mac danh." },
  ],

  cr: [
    { en:"How long does copyright protection generally last under the Berne Convention?",
      vi:"Thoi han bao ho ban quyen thuong keo dai bao lau theo Cong uoc Berne?",
      opts:[{k:'A',en:"10 years from publication",vi:"10 nam ke tu khi xuat ban"},{k:'B',en:"20 years from application",vi:"20 nam ke tu khi nop don"},{k:'C',en:"The life of the author plus 50 years",vi:"Suot cuoc doi tac gia cong them 50 nam"},{k:'D',en:"Forever",vi:"Mai mai"}],
      ans:'C', exp:"Theo <strong>Cong uoc Berne</strong>, ban quyen ton tai trong suot cuoc doi tac gia va keo dai them it nhat <strong>50 nam</strong> sau khi tac gia qua doi (nhieu quoc gia quy dinh 70 nam)." },

    { en:"What is a prerequisite for copyright protection?",
      vi:"Dieu kien tien quyet de duoc bao ho ban quyen la gi?",
      opts:[{k:'A',en:"The work must be registered with the government",vi:"Tac pham phai duoc dang ky voi chinh phu"},{k:'B',en:"The work must be fixed in a tangible medium of expression",vi:"Tac pham phai duoc dinh hinh trong mot phuong tien bieu dat huu hinh"},{k:'C',en:"The work must be profitable",vi:"Tac pham phai sinh loi"},{k:'D',en:"The work must be translated into English",vi:"Tac pham phai duoc dich sang tieng Anh"}],
      ans:'B', exp:"Ban quyen phat sinh tu dong khong can dang ky, nhung y tuong phai duoc <strong>'dinh hinh'</strong> (ghi lai, viet ra, ve ra, quay lai...) tren mot vat mang tin cu the." },

    { en:"What is the main purpose of the 'fair dealing' exception in copyright law?",
      vi:"Muc dich chinh cua ngoai le 'fair dealing' trong luat ban quyen la gi?",
      opts:[{k:'A',en:"To allow unlimited copying for anyone",vi:"De cho phep bat ky ai sao chep khong gioi han"},{k:'B',en:"To allow limited use of copyrighted material without permission for purposes such as research, criticism, or review",vi:"De cho phep su dung gioi han tai lieu co ban quyen ma khong can xin phep cho nghien cuu, phe binh hoac danh gia"},{k:'C',en:"To permit the selling of pirated goods",vi:"De cho phep ban hang lau"},{k:'D',en:"To let companies steal ideas",vi:"De cho cac cong ty an cap y tuong"}],
      ans:'B', exp:"<strong>Fair dealing</strong> la dieu khoan linh hoat cho phep cong chung su dung mot phan nho tac pham co ban quyen de phuc vu giao duc, nghien cuu hoac lam tin tuc ma khong bi coi la vi pham." },

    { en:"What is secondary infringement?",
      vi:"Vi pham thu cap la gi?",
      opts:[{k:'A',en:"Making your own copy",vi:"Tu tao ban sao"},{k:'B',en:"Dealing with unauthorized copies like distributing or selling them",vi:"Xu ly cac ban sao trai phep nhu phan phoi hoac ban chung"},{k:'C',en:"Writing about a copyrighted movie",vi:"Viet ve bo phim co ban quyen"},{k:'D',en:"Posting your work online",vi:"Dang tac pham cua ban len mang"}],
      ans:'B', exp:"<strong>Vi pham thu cap</strong> khong phai la truc tiep sao chep ma la xu ly cac ban sao trai phep - <strong>phan phoi, ban hoac nhap khau hang lau</strong>. Khac voi vi pham so cap la truc tiep tao ra ban sao." },

    { en:"What does the fair use doctrine provide?",
      vi:"Hoc thuyet fair use cung cap dieu gi?",
      opts:[{k:'A',en:"Absolute protection for corporations",vi:"Bao ve tuyet doi cho doanh nghiep"},{k:'B',en:"A way to bypass copyright",vi:"Cach de bo qua ban quyen"},{k:'C',en:"Flexibility in using copyrighted works",vi:"Tinh linh hoat trong viec su dung tac pham co ban quyen"},{k:'D',en:"Unrestricted commercial use",vi:"Su dung thuong mai khong gioi han"}],
      ans:'C', exp:"Fair use cho phep <strong>su dung linh hoat</strong> tac pham co ban quyen trong nhung truong hop nhu: binh luan, giang day, tin tuc, nghien cuu - nhung phai trong gioi han hop ly." },

    { en:"What condition is most critical in determining whether parody is fair dealing?",
      vi:"Dieu kien nao quan trong nhat de xac dinh parody co phai la fair dealing khong?",
      opts:[{k:'A',en:"Author permission",vi:"Duoc tac gia cho phep"},{k:'B',en:"It does not substitute the original work's market",vi:"No khong thay the thi truong cua tac pham goc"},{k:'C',en:"It's uploaded to YouTube",vi:"No duoc tai len YouTube"},{k:'D',en:"It uses music only",vi:"No chi su dung am nhac"}],
      ans:'B', exp:"Parody duoc bao ve khi no <strong>khong tranh gianh khach hang cua tac pham goc</strong> - nguoi ta xem ban nhai de cuoi, nhung van co nhu cau mua/xem ban goc." },

    { en:"What types of works can be used under fair dealing for review?",
      vi:"Loai tac pham nao co the su dung theo fair dealing cho muc dich review?",
      opts:[{k:'A',en:"Only news",vi:"Chi tin tuc"},{k:'B',en:"Literary, artistic, and media works",vi:"Tac pham van hoc, nghe thuat va truyen thong"},{k:'C',en:"Only textbooks",vi:"Chi sach giao khoa"},{k:'D',en:"Only registered works",vi:"Chi tac pham da dang ky"}],
      ans:'B', exp:"Fair dealing cho muc dich review ap dung voi <strong>tac pham van hoc, nghe thuat, va truyen thong</strong> - bao gom sach, phim, am nhac, tranh nghe thuat." },

    { en:"What condition must be met for fair dealing in research?",
      vi:"Dieu kien nao phai duoc dap ung de su dung hop ly trong nghien cuu?",
      opts:[{k:'A',en:"Author must be credited",vi:"Phai ghi nhan tac gia"},{k:'B',en:"Work must be printed",vi:"Tac pham phai duoc in"},{k:'C',en:"Use must be fair and reasonable",vi:"Viec su dung phai cong bang va hop ly"},{k:'D',en:"Work must be older than 10 years",vi:"Tac pham phai cu hon 10 nam"}],
      ans:'C', exp:"<strong>Fair dealing</strong> trong nghien cuu: chi dung phan can thiet, khong thay the viec mua tac pham goc, va phuc vu muc dich nghien cuu thuc su." },

    { en:"What condition is required for joint owners to license their work?",
      vi:"Dieu kien nao can thiet de dong so huu cap phep tac pham?",
      opts:[{k:'A',en:"Any one author may license it",vi:"Bat ky tac gia nao cung co the cap phep"},{k:'B',en:"The publisher decides",vi:"Nha xuat ban quyet dinh"},{k:'C',en:"Mutual consent of all joint owners",vi:"Su dong y cua tat ca dong so huu"},{k:'D',en:"Fair use is automatically applied",vi:"Fair use tu dong ap dung"}],
      ans:'C', exp:"Khi tac pham thuoc nhieu nguoi, <strong>tat ca chu so huu phai dong y</strong> moi co the cap phep cho ben thu ba - khong ai duoc tu y quyet dinh vuot mat nhung nguoi con lai." },

    { en:"Which of the following is a key distinction between moral and economic rights?",
      vi:"Diem khac biet chinh giua quyen tinh than va quyen kinh te la gi?",
      opts:[{k:'A',en:"Moral rights are non-transferable; economic rights can be assigned",vi:"Quyen tinh than khong the chuyen nhuong; quyen kinh te co the chuyen nhuong"},{k:'B',en:"Both must be registered",vi:"Ca hai deu phai dang ky"},{k:'C',en:"Economic rights are waived by default",vi:"Quyen kinh te duoc tu bo mac dinh"},{k:'D',en:"Only moral rights apply to software",vi:"Chi quyen tinh than ap dung cho phan mem"}],
      ans:'A', exp:"<strong>Quyen tinh than</strong> gan chat voi tac gia, khong the ban hay chuyen nhuong. <strong>Quyen kinh te</strong> la tai san co the mua ban, cap phep hoac chuyen giao cho nguoi khac." },

    { en:"What happens to copyright after the term expires?",
      vi:"Dieu gi xay ra voi ban quyen sau khi het thoi han?",
      opts:[{k:'A',en:"It enters the public domain",vi:"No di vao pham vi cong cong"},{k:'B',en:"The government takes ownership",vi:"Chinh phu gianh quyen so huu"},{k:'C',en:"It is renewed automatically",vi:"No tu dong duoc gia han"},{k:'D',en:"It transfers to the publisher",vi:"No duoc chuyen giao cho nha xuat ban"}],
      ans:'A', exp:"Khi het thoi han bao ho, tac pham tro thanh <strong>tai san chung cua nhan loai (public domain)</strong>. Bat ky ai cung co the su dung, sao chep hoac kinh doanh ma khong so bi kien." },

    { en:"Which argument best supports stronger protection for computer-generated works?",
      vi:"Lap luan nao ung ho bao ve manh hon cho tac pham do may tinh tao ra?",
      opts:[{k:'A',en:"Computers should own property",vi:"May tinh nen duoc so huu tai san"},{k:'B',en:"They are increasingly indistinguishable from human-authored content",vi:"Chung ngay cang khong the phan biet voi noi dung do con nguoi tao"},{k:'C',en:"They must remain public domain",vi:"Chung phai thuoc mien cong cong"},{k:'D',en:"Human creators lose value",vi:"Nguoi sang tao con nguoi mat gia tri"}],
      ans:'B', exp:"Khi <strong>AI tao ra tac pham khong the phan biet voi tac pham cua con nguoi</strong>, viec thieu bao ho se tao ra bat cong cho nhung nguoi dau tu xay dung va lap trinh he thong AI do." },

    { en:"What problem may arise from inconsistent copyright terms across countries?",
      vi:"Van de gi co the phat sinh tu su khong nhat quan ve thoi han ban quyen giua cac quoc gia?",
      opts:[{k:'A',en:"More public access",vi:"Tiep can cong khai nhieu hon"},{k:'B',en:"Legal uncertainty in international licensing and enforcement",vi:"Su khong chac chan phap ly trong cap phep va thuc thi quoc te"},{k:'C',en:"Easier registration",vi:"Dang ky de hon"},{k:'D',en:"Harmonized royalty collection",vi:"Thu tien ban quyen duoc hai hoa hoa"}],
      ans:'B', exp:"Su chenh lech luat phap tao ra <strong>su khong chac chan phap ly</strong> - cung mot tac pham co the het han o nuoc nay nhung van con hieu luc o nuoc khac, khien viec cap phep xuyen bien gioi cuc ky roi ram." },
  ],

  dr: [
    { en:"Which of the following is most likely covered by design right?",
      vi:"Dieu nao sau day nhieu kha nang duoc bao ve boi design right?",
      opts:[{k:'A',en:"A graphic user interface",vi:"Giao dien nguoi dung do hoa"},{k:'B',en:"The shape of a chair",vi:"Hinh dang cua chiec ghe"},{k:'C',en:"A software license",vi:"Giay phep phan mem"},{k:'D',en:"A company slogan",vi:"Khau hieu cong ty"}],
      ans:'B', exp:"<strong>Design right</strong> bao ve hinh dang va cau hinh vat ly cua san pham - nhu hinh dang chiec ghe. GUI bao ve boi ban quyen, slogan boi nhan hieu." },

    { en:"Which of the following is considered a legal remedy for infringement?",
      vi:"Dieu nao sau day duoc coi la bien phap khac phuc phap ly cho vi pham?",
      opts:[{k:'A',en:"Redesign suggestions",vi:"Goi y thiet ke lai"},{k:'B',en:"Registration of new design",vi:"Dang ky thiet ke moi"},{k:'C',en:"Injunction and damages",vi:"Lenh cam va boi thuong thiet hai"},{k:'D',en:"Transfer of license",vi:"Chuyen nhuong giay phep"}],
      ans:'C', exp:"Hai bien phap pho bien nhat: <strong>Injunction</strong> (lenh toa an buoc dung vi pham) va <strong>Damages</strong> (boi thuong thiet hai tai chinh)." },

    { en:"How must a design right assignment be made to be enforceable?",
      vi:"Chuyen nhuong design right phai duoc thuc hien nhu the nao de co hieu luc phap ly?",
      opts:[{k:'A',en:"Orally",vi:"Bang loi noi"},{k:'B',en:"In writing",vi:"Bang van ban"},{k:'C',en:"On social media",vi:"Tren mang xa hoi"},{k:'D',en:"Through invoice only",vi:"Chi qua hoa don"}],
      ans:'B', exp:"Chuyen nhuong design right <strong>phai bang van ban</strong> va co chu ky de co hieu luc phap ly. Thoa thuan mieng khong duoc toa an cong nhan." },

    { en:"How often must a registered design be renewed?",
      vi:"Thiet ke da dang ky phai duoc gia han bao lau mot lan?",
      opts:[{k:'A',en:"Every year",vi:"Moi nam"},{k:'B',en:"Every 5 years",vi:"Moi 5 nam"},{k:'C',en:"Once every 10 years",vi:"10 nam mot lan"},{k:'D',en:"Monthly",vi:"Hang thang"}],
      ans:'B', exp:"Tai UK, <strong>registered design</strong> can duoc gia han moi <strong>5 nam</strong> mot lan, voi thoi han bao ho toi da la 25 nam (5 lan gia han)." },

    { en:"What determines ownership in commissioned design work?",
      vi:"Dieu gi quyet dinh quyen so huu trong cong viec thiet ke duoc thue?",
      opts:[{k:'A',en:"Verbal agreement",vi:"Thoa thuan mieng"},{k:'B',en:"Designer's reputation",vi:"Danh tieng cua nha thiet ke"},{k:'C',en:"Contractual terms",vi:"Dieu khoan hop dong"},{k:'D',en:"Trademark registration",vi:"Dang ky nhan hieu"}],
      ans:'C', exp:"Khi thiet ke theo dat hang, <strong>dieu khoan hop dong</strong> quyet dinh ai so huu. Neu khong co hop dong ro rang, theo luat UK mac dinh nguoi thue thuong so huu." },

    { en:"What does novelty mean in design registration?",
      vi:"'Novelty' (tinh moi) co nghia gi trong dang ky thiet ke?",
      opts:[{k:'A',en:"The design is old but reused",vi:"Thiet ke cu nhung duoc tai su dung"},{k:'B',en:"The design is new and not previously disclosed",vi:"Thiet ke moi va chua tung duoc cong bo truoc do"},{k:'C',en:"The design has no color",vi:"Thiet ke khong co mau sac"},{k:'D',en:"The design has prior use",vi:"Thiet ke da duoc su dung truoc"}],
      ans:'B', exp:"<strong>Novelty (tinh moi)</strong>: tinh den ngay nop ho so, thiet ke do chua tung xuat hien, chua tung duoc bay ban hay dang len mang o bat cu dau." },

    { en:"What is one limitation of relying solely on design right?",
      vi:"Mot han che cua viec chi dua vao design right la gi?",
      opts:[{k:'A',en:"It lasts too long",vi:"Keo dai qua lau"},{k:'B',en:"It applies to patents",vi:"Ap dung cho sang che"},{k:'C',en:"It's harder to enforce due to lack of registration",vi:"Kho thuc thi hon vi khong co dang ky"},{k:'D',en:"It must be renewed monthly",vi:"Phai gia han hang thang"}],
      ans:'C', exp:"Design right khong dang ky <strong>kho thuc thi</strong> - khong co ho so cong khai xac nhan ngay tao ra va quyen so huu. Khi tranh chap, nguoi giu ban goc phai tu chung minh quyen cua minh." },

    { en:"Which strategy increases a design's overall legal strength?",
      vi:"Chien luoc nao tang suc manh phap ly tong the cua mot thiet ke?",
      opts:[{k:'A',en:"Uploading it to social media",vi:"Tai len mang xa hoi"},{k:'B',en:"Waiting for someone to copy it",vi:"Cho ai do sao chep"},{k:'C',en:"Combining registered design, design right, and copyright",vi:"Ket hop registered design, design right va ban quyen"},{k:'D',en:"Posting disclaimers",vi:"Dang tuyen bo mien tru trach nhiem"}],
      ans:'C', exp:"<strong>Bao ho chong lan</strong>: Registered Design (manh nhat, co ho so) + Design Right (tu dong) + Copyright (neu co tinh nghe thuat) = lop bao ve toan dien." },

    { en:"Under which Act was design right introduced in the UK?",
      vi:"Design right duoc gioi thieu tai Anh theo Dao luat nao?",
      opts:[{k:'A',en:"Trademark Act 1994",vi:"Dao luat Nhan hieu 1994"},{k:'B',en:"Copyright, Designs and Patents Act 1988",vi:"Dao luat Ban quyen, Thiet ke va Sang che 1988"},{k:'C',en:"Intellectual Property Act 2003",vi:"Dao luat So huu Tri tue 2003"},{k:'D',en:"Design Protection Law 1999",vi:"Luat Bao ho Thiet ke 1999"}],
      ans:'B', exp:"<strong>Copyright, Designs and Patents Act 1988 (CDPA 1988)</strong> la dao luat tong hop cua Anh quy dinh ve ban quyen, design right va sang che - van la nen tang phap ly IP chinh tai UK." },

    { en:"Why might a designer choose to register their design instead of relying on design right?",
      vi:"Tai sao nha thiet ke co the chon dang ky thiet ke thay vi chi dua vao design right?",
      opts:[{k:'A',en:"To avoid moral rights",vi:"De tranh quyen tinh than"},{k:'B',en:"To limit their protection",vi:"De han che bao ho"},{k:'C',en:"To gain longer and stronger protection",vi:"De duoc bao ho lau hon va manh hon"},{k:'D',en:"Because registration is free",vi:"Vi dang ky mien phi"}],
      ans:'C', exp:"<strong>Registered design</strong> bao ho toi 25 nam, de thuc thi hon (co ho so cong khai), va bao ve ca truong hop thiet ke tuong tu duoc tao ra doc lap." },

    { en:"What is a 'prior use' defense?",
      vi:"'Prior use defense' (bien ho su dung truoc) la gi?",
      opts:[{k:'A',en:"Using a design in future products",vi:"Su dung thiet ke trong san pham tuong lai"},{k:'B',en:"The accused was using the design before it was registered",vi:"Bi don da su dung thiet ke truoc khi no duoc dang ky"},{k:'C',en:"Refusing to register",vi:"Tu choi dang ky"},{k:'D',en:"Blocking another's trademark",vi:"Chan nhan hieu cua nguoi khac"}],
      ans:'B', exp:"Neu bi don chung minh ho da su dung thiet ke <strong>truoc khi nguyen don dang ky</strong>, ho co the tiep tuc su dung - nhung khong duoc mo rong pham vi." },

    { en:"A company develops a unique coffee machine shape. How can they protect it most effectively?",
      vi:"Mot cong ty phat trien hinh dang may pha ca phe doc dao. Bao ve hieu qua nhat bang cach nao?",
      opts:[{k:'A',en:"With a software license",vi:"Bang giay phep phan mem"},{k:'B',en:"Through both design right and registered design",vi:"Thong qua ca design right va registered design"},{k:'C',en:"Using fair dealing",vi:"Bang cach su dung hop ly"},{k:'D',en:"By publishing a manual",vi:"Bang cach xuat ban sach huong dan"}],
      ans:'B', exp:"<strong>Bao ho kep</strong>: Design right (tu dong, ngan sao chep truc tiep) + Registered design (doc quyen tuyet doi, de kien tung) = giap phap ly toan dien nhat." },

    { en:"A company imports furniture with designs similar to a UK-registered design. What might occur?",
      vi:"Mot cong ty nhap khau do noi that co thiet ke tuong tu thiet ke da dang ky tai Anh. Dieu gi co the xay ra?",
      opts:[{k:'A',en:"The company gets tax benefits",vi:"Cong ty nhan duoc uu dai thue"},{k:'B',en:"They may face an infringement lawsuit",vi:"Ho co the phai doi mat voi vu kien vi pham"},{k:'C',en:"They can copyright it",vi:"Ho co the dang ky ban quyen cho no"},{k:'D',en:"They own the design",vi:"Ho so huu thiet ke do"}],
      ans:'B', exp:"Registered Design cap doc quyen ca ve <strong>nhap khau</strong>. Viec nhap hang sao chep thiet ke da bao ho tu nuoc ngoai vao Anh la vi pham ro rang." },
  ],

  sm: [
    { en:"What might a former employee violate if they take over a company's account?",
      vi:"Nhan vien cu co the vi pham dieu gi neu chiem doat tai khoan cong ty?",
      opts:[{k:'A',en:"Do not violate",vi:"Khong vi pham"},{k:'B',en:"Social policy",vi:"Chinh sach xa hoi"},{k:'C',en:"CFAA (unauthorized access)",vi:"CFAA (truy cap trai phep)"},{k:'D',en:"Export control",vi:"Kiem soat xuat khau"}],
      ans:'C', exp:"<strong>CFAA (Computer Fraud and Abuse Act)</strong> cam truy cap trai phep vao he thong may tinh. Nhan vien cu chiem quyen tai khoan cong ty sau khi da nghi la vi pham CFAA." },

    { en:"What should employees do with personal and professional social media accounts?",
      vi:"Nhan vien nen lam gi voi tai khoan mang xa hoi ca nhan va cong viec?",
      opts:[{k:'A',en:"Share all access",vi:"Chia se tat ca quyen truy cap"},{k:'B',en:"Delete them",vi:"Xoa chung di"},{k:'C',en:"Keep them separate",vi:"Giu chung tach biet"},{k:'D',en:"Merge into one",vi:"Gop lai thanh mot"}],
      ans:'C', exp:"<strong>Tach biet tai khoan ca nhan va cong viec</strong> giup tranh nham lan ve quyen so huu, bao ve bi mat kinh doanh, va ngan ngua tranh chap phap ly khi nhan vien nghi viec." },

    { en:"BBC revised its social media policy in:",
      vi:"BBC sua doi chinh sach mang xa hoi vao nam:",
      opts:[{k:'A',en:"2021",vi:"2021"},{k:'B',en:"2019",vi:"2019"},{k:'C',en:"2005",vi:"2005"},{k:'D',en:"1999",vi:"1999"}],
      ans:'A', exp:"BBC sua doi chinh sach vao <strong>nam 2021</strong>, yeu cau nhan vien than trong hon tren mang xa hoi de bao ve tinh trung lap va uy tin cua dai." },

    { en:"Before sharing breaking news content, journalists should:",
      vi:"Truoc khi chia se tin tuc nong, nha bao nen:",
      opts:[{k:'A',en:"Make it viral",vi:"Lam no lan truyen"},{k:'B',en:"Verify it",vi:"Xac minh thong tin"},{k:'C',en:"Ask for donations",vi:"Xin quyen gop"},{k:'D',en:"Post quickly",vi:"Dang nhanh nhat co the"}],
      ans:'B', exp:"Nguyen tac bao chi co ban: <strong>xac minh truoc khi dang</strong>. Dua tin chua xac minh co the dan den trach nhiem phap ly ve thong tin sai lech." },

    { en:"Which news outlet discourages discussing confidential sources online?",
      vi:"Co quan truyen thong nao khong khuyen khich thao luan ve nguon tin bao mat truc tuyen?",
      opts:[{k:'A',en:"CNN",vi:"CNN"},{k:'B',en:"Wall Street Journal",vi:"Wall Street Journal"},{k:'C',en:"TikTok",vi:"TikTok"},{k:'D',en:"Google",vi:"Google"}],
      ans:'B', exp:"<strong>Wall Street Journal</strong> co chinh sach khong khuyen khich thao luan ve nguon tin bao mat tren mang xa hoi de bao ve nguon tin va tinh doc lap bao chi." },

    { en:"Why do legal disputes over social media continue to rise?",
      vi:"Tai sao tranh chap phap ly ve mang xa hoi tiep tuc gia tang?",
      opts:[{k:'A',en:"Lack of hashtags",vi:"Thieu hashtag"},{k:'B',en:"Blurring lines between personal and professional accounts",vi:"Ranh gioi mo giua tai khoan ca nhan va cong viec"},{k:'C',en:"Declining followers",vi:"So nguoi theo doi giam"},{k:'D',en:"Faster internet",vi:"Internet nhanh hon"}],
      ans:'B', exp:"Nguyen nhan chinh: <strong>ranh gioi mo nhat giua tai khoan ca nhan va cong viec</strong> - khi nhan vien dung mot tai khoan cho ca hai muc dich, cau hoi ve quyen so huu va trach nhiem phap ly tro nen phuc tap." },

    { en:"Social media ownership after employment should be addressed:",
      vi:"Quyen so huu mang xa hoi sau khi nghi viec nen duoc giai quyet:",
      opts:[{k:'A',en:"Through word of mouth",vi:"Bang truyen mieng"},{k:'B',en:"In employment agreements",vi:"Trong hop dong lao dong"},{k:'C',en:"By the IT team",vi:"Boi bo phan IT"},{k:'D',en:"Via brand audits",vi:"Qua kiem toan thuong hieu"}],
      ans:'B', exp:"<strong>Hop dong lao dong</strong> la noi phu hop nhat de quy dinh ro: tai khoan nao thuoc cong ty, tai khoan nao thuoc ca nhan, va quy trinh chuyen giao khi nhan vien roi di." },

    { en:"An employment contract should define:",
      vi:"Hop dong lao dong nen quy dinh:",
      opts:[{k:'A',en:"Hashtag trends",vi:"Xu huong hashtag"},{k:'B',en:"Who controls the account and what happens after employment ends",vi:"Ai kiem soat tai khoan va dieu gi xay ra sau khi hop dong ket thuc"},{k:'C',en:"Meeting times",vi:"Thoi gian hop"},{k:'D',en:"Survey questions",vi:"Cau hoi khao sat"}],
      ans:'B', exp:"Hop dong can ro rang ve <strong>ai so huu tai khoan, quy trinh chuyen giao</strong> khi nhan vien roi di - dieu nay ngan ngua tranh chap ton kem ve sau." },

    { en:"NPR discourages:",
      vi:"NPR khong khuyen khich:",
      opts:[{k:'A',en:"Reporting from the field",vi:"Phong su thuc dia"},{k:'B',en:"Sharing internal disagreements on social platforms",vi:"Chia se bat dong noi bo tren mang xa hoi"},{k:'C',en:"Posting breaking news",vi:"Dang tin tuc nong"},{k:'D',en:"Using photos",vi:"Su dung anh"}],
      ans:'B', exp:"NPR yeu cau nhan vien <strong>khong chia se bat dong noi bo len mang xa hoi</strong> - bao ve uy tin to chuc va dam bao cac van de noi bo duoc giai quyet qua kenh phu hop." },

    { en:"In Eagle v. Morgan, who sued whom?",
      vi:"Trong vu an Eagle v. Morgan, ai da kien ai?",
      opts:[{k:'A',en:"A school vs. publisher",vi:"Mot truong hoc kien nha xuat ban"},{k:'B',en:"An employee sued her employer",vi:"Mot nhan vien kien nguoi su dung lao dong cua co ay"},{k:'C',en:"A brand sued Facebook",vi:"Mot thuong hieu kien Facebook"},{k:'D',en:"A designer sued Instagram",vi:"Mot nha thiet ke kien Instagram"}],
      ans:'B', exp:"Vu Eagle v. Morgan: Ba Eagle kien cong ty cu vi sau khi sa thai, cong ty <strong>chiem doat tai khoan LinkedIn ca nhan</strong> cua ba de lay danh sach khach hang." },

    { en:"What did the Christou case recognize?",
      vi:"Vu an Christou da cong nhan dieu gi?",
      opts:[{k:'A',en:"Meme legality",vi:"Tinh hop phap cua meme"},{k:'B',en:"That a friends list may be a trade secret",vi:"Rang danh sach ban be co the la mot bi mat thuong mai"},{k:'C',en:"Right to parody",vi:"Quyen duoc nhai lai (parody)"},{k:'D',en:"Hashtag trademarking",vi:"Dang ky nhan hieu hashtag"}],
      ans:'B', exp:"Vu Christou v Beaties: toa an phan quyet rang <strong>danh sach khach hang tren mang xa hoi cua cong ty</strong> co the duoc coi la bi mat thuong mai. Nhan vien nghi viec khong duoc phep lay danh sach nay." },

    { en:"What is a common method to resolve social media ownership disputes?",
      vi:"Phuong phap pho bien de giai quyet tranh chap quyen so huu mang xa hoi la gi?",
      opts:[{k:'A',en:"Complaining publicly",vi:"Khieu nai cong khai"},{k:'B',en:"Mediation or legal agreement",vi:"Hoa giai hoac thoa thuan phap ly"},{k:'C',en:"Changing passwords",vi:"Doi mat khau"},{k:'D',en:"Hiring influencers",vi:"Thue nguoi co anh huong"}],
      ans:'B', exp:"<strong>Hoa giai hoac thoa thuan phap ly</strong> it ton kem hon kien tung, bao mat hon, va thuong dat duoc ket qua nhanh hon cho ca hai ben." },

    { en:"What is one key message from this module?",
      vi:"Thong diep chinh cua chu de mang xa hoi la gi?",
      opts:[{k:'A',en:"Social media is fun",vi:"Mang xa hoi thu vi"},{k:'B',en:"Persona ownership must be legally addressed in employment",vi:"Quyen so huu 'persona' phai duoc giai quyet phap ly trong hop dong lao dong"},{k:'C',en:"Followers mean fame",vi:"So nguoi theo doi dong nghia voi danh tieng"},{k:'D',en:"Emails must be private",vi:"Email phai la rieng tu"}],
      ans:'B', exp:"Thong diep cot loi: <strong>quyen so huu persona va tai khoan mang xa hoi</strong> phai duoc quy dinh ro trong hop dong lao dong de tranh tranh chap khi nhan vien nghi viec." },

    { en:"Fake reviews are often created by:",
      vi:"Cac danh gia gia mao thuong duoc tao ra boi:",
      opts:[{k:'A',en:"Customers",vi:"Khach hang"},{k:'B',en:"Employees or paid reviewers",vi:"Nhan vien hoac nhung nguoi danh gia duoc tra tien"},{k:'C',en:"Media agencies",vi:"Cac co quan truyen thong"},{k:'D',en:"Government officials",vi:"Cac quan chuc chinh phu"}],
      ans:'B', exp:"Fake reviews thuong do chinh <strong>nhan vien cong ty gia danh khach hang</strong> hoac do thue nguoi (paid reviewers) viet bai khen ma khong tiet lo duoc tra tien." },

    { en:"Disclosure of a material connection between the endorser and the advertiser helps prevent:",
      vi:"Viec tiet lo moi lien he vat chat giua nguoi chung thuc va nha quang cao giup ngan chan:",
      opts:[{k:'A',en:"Trademark loss",vi:"Mat nhan hieu"},{k:'B',en:"Misleading consumers",vi:"Nguoi tieu dung bi lua doi"},{k:'C',en:"Product damage",vi:"Thiet hai san pham"},{k:'D',en:"Shipment errors",vi:"Loi van chuyen"}],
      ans:'B', exp:"FTC yeu cau tiet lo moi quan he thanh toan (dung #ad, #sponsored) de <strong>ngan nguoi tieu dung bi lua doi</strong> nghi rang day la danh gia trung thuc thay vi quang cao tra tien." },

    { en:"Proper disclosures help brands:",
      vi:"Viec tiet lo thong tin hop ly giup cac thuong hieu:",
      opts:[{k:'A',en:"Sell faster",vi:"Ban hang nhanh hon"},{k:'B',en:"Avoid legal trouble",vi:"Tranh rac roi phap ly"},{k:'C',en:"Hide mistakes",vi:"Che giau sai lam"},{k:'D',en:"Increase packaging",vi:"Tang cuong bao bi"}],
      ans:'B', exp:"Tiet lo ro rang (#ad, #sponsored) giup thuong hieu va KOL <strong>tranh bi khoi kien vi toi quang cao lua doi</strong> theo quy dinh cua FTC." },

    { en:"Public voting systems in contests must be:",
      vi:"He thong binh chon cong khai trong cac cuoc thi phai duoc:",
      opts:[{k:'A',en:"Paid only",vi:"Chi tra phi"},{k:'B',en:"Structured to avoid pure chance",vi:"Co cau truc de tranh su may rui hoan toan"},{k:'C',en:"Eliminated",vi:"Loai bo"},{k:'D',en:"Replaced",vi:"Thay the"}],
      ans:'B', exp:"De tranh bi coi la co bac, cac thuong hieu to chuc thi dua tren <strong>ky nang</strong> va ket qua qua binh chon - chung minh day la cuoc thi tai nang chu khong phai may rui." },

    { en:"Which newspaper recommends consistent social connections?",
      vi:"To bao nao khuyen nghi duy tri ket noi xa hoi nhat quan?",
      opts:[{k:'A',en:"Roanoke Times",vi:"Roanoke Times"},{k:'B',en:"The Guardian",vi:"The Guardian"},{k:'C',en:"BBC",vi:"BBC"},{k:'D',en:"Forbes",vi:"Forbes"}],
      ans:'A', exp:"<strong>Roanoke Times</strong> co chinh sach khuyen nghi nhan vien duy tri ket noi xa hoi nhat quan de xay dung long tin va gan ket voi cong dong doc gia dia phuong." },

    { en:"What is a trade secret in the context of social media use?",
      vi:"Bi mat thuong mai trong boi canh su dung mang xa hoi la gi?",
      opts:[{k:'A',en:"Publicly available information",vi:"Thong tin cong khai"},{k:'B',en:"Sensitive company information like product launches, marketing strategies, or internal policies",vi:"Thong tin nhay cam cua cong ty nhu ra mat san pham, chien luoc tiep thi, hoac chinh sach noi bo"},{k:'C',en:"Employee personal opinions",vi:"Y kien ca nhan cua nhan vien"},{k:'D',en:"Marketing slogans",vi:"Khau hieu tiep thi"}],
      ans:'B', exp:"<strong>Bi mat thuong mai</strong>: thong tin kinh doanh co gia tri, mang lai loi the canh tranh, va dang duoc cong ty bao ve can mat. Tiet lo len MXH la vi pham nghiem trong." },

    { en:"Follower lists may be trade secrets if they:",
      vi:"Danh sach nguoi theo doi co the la bi mat thuong mai neu chung:",
      opts:[{k:'A',en:"Are used for decoration",vi:"Duoc dung de trang tri"},{k:'B',en:"Offer business advantage and are not public",vi:"Mang lai loi the kinh doanh va khong cong khai"},{k:'C',en:"Are on Facebook",vi:"O tren Facebook"},{k:'D',en:"Come from interns",vi:"Den tu thuc tap sinh"}],
      ans:'B', exp:"Danh sach chi la bi mat thuong mai khi: (1) <strong>tao ra loi the canh tranh thuc su</strong>, va (2) cong ty da ap dung bien phap bao mat de giu kin no." },

    { en:"FTC mandates that brands must disclose:",
      vi:"FTC bat buoc cac thuong hieu phai tiet lo:",
      opts:[{k:'A',en:"Corporate structure",vi:"Cau truc doanh nghiep"},{k:'B',en:"Type of prize, number of winners, and odds of winning",vi:"Loai giai thuong, so luong nguoi chien thang va ty le trung thuong"},{k:'C',en:"Customer reviews",vi:"Danh gia cua khach hang"},{k:'D',en:"Social media plan",vi:"Ke hoach truyen thong mang xa hoi"}],
      ans:'B', exp:"FTC yeu cau khi to chuc giveaway/contest phai cong khai minh bach ve <strong>giai thuong, so luong giai va xac suat trung giai thuc te</strong> de bao ve nguoi tieu dung." },
  ],

  li: [
    { en:"What is a common outcome of licensing settlements?",
      vi:"Ket qua pho bien cua giai quyet tranh chap cap phep la gi?",
      opts:[{k:'A',en:"Trademark registration",vi:"Dang ky nhan hieu"},{k:'B',en:"Payment of royalties as compensation",vi:"Thanh toan tien ban quyen nhu boi thuong"},{k:'C',en:"Creation of joint ventures",vi:"Thanh lap lien doanh"},{k:'D',en:"Patent cancellation",vi:"Huy bang sang che"}],
      ans:'B', exp:"Thay vi kien tung keo dai, cac ben thuong hoa giai ngoai toa. Ket qua pho bien nhat la ke vi pham tra <strong>tien ban quyen (royalties)</strong> va ky hop dong cap phep chinh thuc." },

    { en:"What are the two main forms of financial compensation in licensing?",
      vi:"Hai hinh thuc boi thuong tai chinh chinh trong cap phep la gi?",
      opts:[{k:'A',en:"Rent and loan",vi:"Tien thue va khoan vay"},{k:'B',en:"Lump sum and royalties",vi:"Thanh toan mot lan va tien ban quyen"},{k:'C',en:"Fees and donations",vi:"Phi va quyen gop"},{k:'D',en:"Interest and bonus",vi:"Lai suat va tien thuong"}],
      ans:'B', exp:"<strong>Lump sum</strong> (tra mot lan khi ky) va <strong>Royalties</strong> (tra theo ty le doanh thu). Nhieu hop dong ket hop ca hai hinh thuc." },

    { en:"If a settlement is reached, what is often included?",
      vi:"Khi dat duoc thoa thuan dan xep, dieu gi thuong duoc bao gom?",
      opts:[{k:'A',en:"Cancellation of copyright",vi:"Huy ban quyen"},{k:'B',en:"Compensation or license terms",vi:"Boi thuong hoac dieu khoan cap phep"},{k:'C',en:"New creation",vi:"Tao tac pham moi"},{k:'D',en:"Criminal penalty",vi:"Hinh phat hinh su"}],
      ans:'B', exp:"Dan xep tranh chap IP thuong bao gom: <strong>boi thuong tai chinh</strong> va/hoac <strong>dieu khoan cap phep</strong> cho phep tiep tuc su dung co kiem soat." },

    { en:"A well-structured license ensures:",
      vi:"Mot giay phep duoc cau truc tot dam bao:",
      opts:[{k:'A',en:"Public access",vi:"Quyen truy cap cong khai"},{k:'B',en:"Mutual benefit and long-term success",vi:"Loi ich cho ca hai ben va thanh cong lau dai"},{k:'C',en:"Lack of enforceability",vi:"Thieu kha nang thuc thi"},{k:'D',en:"Faster trademarking",vi:"Dang ky nhan hieu nhanh hon"}],
      ans:'B', exp:"Hop dong cap phep tot tao ra moi quan he <strong>win-win</strong>, bao ve quyen loi cua ca licensor va licensee, dam bao hop tac suon se va loi nhuan lau dai." },

    { en:"Improvement clauses relate to:",
      vi:"Dieu khoan cai tien (improvement clauses) lien quan den:",
      opts:[{k:'A',en:"New technology or enhancements during the license period",vi:"Cong nghe moi hoac cai tien trong thoi gian cap phep"},{k:'B',en:"Advertising strategy",vi:"Chien luoc quang cao"},{k:'C',en:"Currency conversion",vi:"Quy doi ngoai te"},{k:'D',en:"Employee contracts",vi:"Hop dong nhan vien"}],
      ans:'A', exp:"<strong>Improvement clauses</strong> quy dinh dieu gi xay ra khi co cai tien trong thoi gian hop dong - ai so huu cai tien do va lieu cai tien co nam trong pham vi cap phep khong." },

    { en:"If an exclusive licensee sublicenses the work to others without permission, what is violated?",
      vi:"Neu nguoi duoc cap phep doc quyen tu y cap phep lai ma khong co phep, dieu gi bi vi pham?",
      opts:[{k:'A',en:"Fair use",vi:"Su dung hop ly"},{k:'B',en:"The exclusivity clause in the licensing agreement",vi:"Dieu khoan doc quyen trong hop dong cap phep"},{k:'C',en:"Public performance right",vi:"Quyen bieu dien cong khai"},{k:'D',en:"Attribution right",vi:"Quyen ghi nhan"}],
      ans:'B', exp:"Quyen sublicense phai duoc licensor dong y va ghi ro trong hop dong. Tu y cap phep lai vi pham <strong>dieu khoan doc quyen</strong>." },

    { en:"Tax consequences in licensing can impact:",
      vi:"Hau qua thue trong cap phep co the anh huong den:",
      opts:[{k:'A',en:"Sales performance only",vi:"Chi hieu suat ban hang"},{k:'B',en:"The net income for both parties",vi:"Thu nhap rong cua ca hai ben"},{k:'C',en:"Branding effectiveness",vi:"Hieu qua thuong hieu"},{k:'D',en:"Use of social media",vi:"Su dung mang xa hoi"}],
      ans:'B', exp:"Withholding tax, VAT, thue thu nhap tu royalties anh huong truc tiep den <strong>thu nhap rong cua ca licensor va licensee</strong> - can tinh toan ky trong dam phan." },

    { en:"In case of unauthorized use of the licensed technology, the licensee should:",
      vi:"Trong truong hop cong nghe duoc cap phep bi su dung trai phep, nguoi duoc cap phep nen:",
      opts:[{k:'A',en:"Ignore it",vi:"Bo qua"},{k:'B',en:"Send a newsletter",vi:"Gui ban tin"},{k:'C',en:"Report the infringement to the licensor",vi:"Bao cao vi pham cho nguoi cap phep"},{k:'D',en:"Reduce production",vi:"Giam san xuat"}],
      ans:'C', exp:"Licensee thuong khong co quyen truc tiep khoi kien. Hanh dong dung la <strong>bao cao ngay cho licensor</strong> de ho co bien phap phap ly can thiep kip thoi." },

    { en:"One benefit of unregistered get-up rights is that:",
      vi:"Mot loi ich cua quyen get-up khong dang ky la:",
      opts:[{k:'A',en:"They require expensive filing",vi:"Chung yeu cau nop phi ton kem"},{k:'B',en:"They arise through use without formal registration",vi:"Chung phat sinh qua viec su dung ma khong can dang ky chinh thuc"},{k:'C',en:"They only work with trademark",vi:"Chung chi hoat dong voi nhan hieu"},{k:'D',en:"They need to be renewed annually",vi:"Can duoc gia han hang nam"}],
      ans:'B', exp:"Quyen get-up <strong>phat sinh tu dong</strong> khi ban su dung va xay dung danh tieng - khong can nop don, khong ton phi dang ky." },

    { en:"What does the Western Electric case demonstrate?",
      vi:"Vu Western Electric chung minh dieu gi?",
      opts:[{k:'A',en:"Patent cancellation",vi:"Huy bang sang che"},{k:'B',en:"Global licensing of core technologies",vi:"Cap phep toan cau cho cong nghe cot loi"},{k:'C',en:"Design outsourcing",vi:"Thue ngoai thiet ke"},{k:'D',en:"Royalty-free systems",vi:"He thong mien tien ban quyen"}],
      ans:'B', exp:"Vu <strong>Western Electric</strong> la vi du kinh dien chung minh rang cap phep cong nghe cot loi co the tro thanh nguon doanh thu chinh va thuc day phat trien cong nghiep toan cau." },

    { en:"In passing-off, what must damage refer to?",
      vi:"Trong passing-off, thiet hai phai de cap den dieu gi?",
      opts:[{k:'A',en:"Sales profit only",vi:"Chi loi nhuan ban hang"},{k:'B',en:"Loss of business reputation or sales",vi:"Mat uy tin kinh doanh hoac doanh so ban hang"},{k:'C',en:"Loss of color scheme",vi:"Mat cach phoi mau"},{k:'D',en:"Change of supplier",vi:"Thay doi nha cung cap"}],
      ans:'B', exp:"Thiet hai trong passing-off: <strong>mat doanh thu thuc te</strong> (khach mua nham hang doi thu) hoac <strong>ton hai uy tin thuong hieu</strong> (khach xai do gia rom roi chui thuong hieu goc)." },

    { en:"When can a licensor terminate a licensing agreement?",
      vi:"Khi nao nguoi cap phep co the cham dut thoa thuan cap phep?",
      opts:[{k:'A',en:"At any time without reason",vi:"Bat cu luc nao ma khong can ly do"},{k:'B',en:"Only if the licensee pays more",vi:"Chi khi nguoi duoc cap phep tra nhieu tien hon"},{k:'C',en:"Upon a material breach of contract by the licensee",vi:"Khi nguoi duoc cap phep vi pham nghiem trong hop dong"},{k:'D',en:"If the licensor changes their mind",vi:"Neu nguoi cap phep doi y"}],
      ans:'C', exp:"Licensor khong duoc tu y huy keo tru khi licensee vi pham cac dieu khoan quan trong (<strong>material breach</strong>) - vi du: khong tra tien ban quyen hoac su dung sai muc dich." },

    { en:"Why is defining the scope of a license crucial?",
      vi:"Tai sao viec xac dinh pham vi cua mot giay phep lai quan trong?",
      opts:[{k:'A',en:"To limit the licensor's liability",vi:"De gioi han trach nhiem phap ly cua nguoi cap phep"},{k:'B',en:"To specify what the licensee can and cannot do with the IP",vi:"De xac dinh ro nhung gi nguoi duoc cap phep co the va khong the lam voi IP"},{k:'C',en:"To increase the registration fee",vi:"De tang phi dang ky"},{k:'D',en:"To make the agreement public",vi:"De lam cho thoa thuan tro nen cong khai"}],
      ans:'B', exp:"Xac dinh pham vi cap phep giup dam bao licensee <strong>khong lam dung tai san</strong> cua ban de truc loi vuot qua quyen han cho phep." },

    { en:"What is a 'cross-license'?",
      vi:"'Cap phep cheo' (cross-license) la gi?",
      opts:[{k:'A',en:"A license that is canceled",vi:"Mot giay phep bi huy bo"},{k:'B',en:"An agreement where two parties grant each other licenses to their respective IP",vi:"Thoa thuan trong do hai ben cap phep cho nhau su dung IP tuong ung cua ho"},{k:'C',en:"A license for international use only",vi:"Giay phep chi danh cho su dung quoc te"},{k:'D',en:"A license that covers all types of IP",vi:"Giay phep bao trum tat ca cac loai IP"}],
      ans:'B', exp:"Thay vi kien tung lan nhau ve vi pham sang che, cac 'ong lon' cong nghe ky <strong>cross-license</strong> de ca hai ben duoc quyen su dung phat minh cua nhau." },

    { en:"In a licensing agreement, what does an 'indemnity' clause do?",
      vi:"Trong thoa thuan cap phep, dieu khoan 'boi hoan' (indemnity) co tac dung gi?",
      opts:[{k:'A',en:"Increases royalties",vi:"Tang tien ban quyen"},{k:'B',en:"Protects one party from liability if the other party breaches third-party rights",vi:"Bao ve mot ben khoi trach nhiem phap ly neu ben kia vi pham quyen cua ben thu ba"},{k:'C',en:"Cancels the contract",vi:"Huy bo hop dong"},{k:'D',en:"Ensures product quality",vi:"Dam bao chat luong san pham"}],
      ans:'B', exp:"<strong>Indemnity clause</strong>: neu IP toi ban cho ban sau nay bi nguoi thu 3 kien vi toi vi pham quyen cua ho, thi TOI se chiu toan bo chi phi kien tung thay cho ban." },

    { en:"In licensing, what is a 'territory' clause?",
      vi:"Trong cap phep, dieu khoan 'lanh tho' (territory) la gi?",
      opts:[{k:'A',en:"The physical location of the server",vi:"Vi tri vat ly cua may chu"},{k:'B',en:"The geographical area where the licensee is allowed to use the IP",vi:"Khu vuc dia ly noi nguoi duoc cap phep duoc phep su dung IP"},{k:'C',en:"The country of the licensor",vi:"Quoc gia cua nguoi cap phep"},{k:'D',en:"The total space occupied by the product",vi:"Tong dien tich ma san pham chiem dung"}],
      ans:'B', exp:"Dieu khoan lanh tho quy dinh <strong>gioi han khong gian dia ly</strong>. Neu vuot ra ngoai lanh tho da thoa thuan, licensee da vi pham hop dong." },
  ],

  pr: [
    { en:"What is a notable feature of California's privacy laws?",
      vi:"Dac diem dang chu y cua luat quyen rieng tu California la gi?",
      opts:[{k:'A',en:"They apply only to companies based in California",vi:"Chi ap dung cho cong ty co tru so o California"},{k:'B',en:"They regulate the collection and sale of personal data",vi:"Chung dieu chinh viec thu thap va ban du lieu ca nhan"},{k:'C',en:"They mandate privacy policies for all non-profit organizations",vi:"Bat buoc tat ca to chuc phi loi nhuan co chinh sach quyen rieng tu"},{k:'D',en:"They allow companies to bypass user consent for data collection",vi:"Cho phep cong ty bo qua su dong y cua nguoi dung"}],
      ans:'B', exp:"<strong>CCPA (California Consumer Privacy Act)</strong> quy dinh chat che ve thu thap, su dung va ban du lieu ca nhan, cho nguoi dung quyen biet va tu choi." },

    { en:"What does GDPR require companies to do regarding data collection?",
      vi:"GDPR yeu cau cong ty lam gi ve thu thap du lieu?",
      opts:[{k:'A',en:"Limit user data to what is necessary for business operations",vi:"Gioi han du lieu nguoi dung chi o muc can thiet cho hoat dong kinh doanh"},{k:'B',en:"Place strict requirements on data collection and processing",vi:"Dat ra yeu cau nghiem ngat ve thu thap va xu ly du lieu"},{k:'C',en:"Allow unlimited collection of data from users",vi:"Cho phep thu thap du lieu khong gioi han"},{k:'D',en:"Automatically collect data without user consent",vi:"Tu dong thu thap du lieu ma khong can dong y"}],
      ans:'B', exp:"<strong>GDPR</strong> dat ra cac yeu cau nghiem ngat: can su dong y ro rang, data minimization, right to erasure, va privacy by design." },

    { en:"Which of the following is a principle of GDPR?",
      vi:"Nguyen tac nao sau day la cua GDPR?",
      opts:[{k:'A',en:"Lawfulness, fairness, and transparency in data processing",vi:"Tinh hop phap, cong bang va minh bach trong xu ly du lieu"},{k:'B',en:"Data collection for any purpose without limitations",vi:"Thu thap du lieu cho bat ky muc dich nao"},{k:'C',en:"Unlimited access to user data for advertising",vi:"Truy cap khong gioi han vao du lieu nguoi dung cho quang cao"},{k:'D',en:"Freedom of user choice without restrictions",vi:"Tu do lua chon cua nguoi dung khong bi han che"}],
      ans:'A', exp:"GDPR dua tren 7 nguyen tac, trong do <strong>tinh hop phap, cong bang va minh bach</strong> la nguyen tac dau tien - moi hoat dong xu ly du lieu phai co co so phap ly." },

    { en:"In 2013, COPPA expanded to include:",
      vi:"Nam 2013, COPPA mo rong de bao gom:",
      opts:[{k:'A',en:"School hours",vi:"Gio hoc"},{k:'B',en:"TV time",vi:"Thoi gian xem TV"},{k:'C',en:"IP addresses and geolocation",vi:"Dia chi IP va vi tri dia ly"},{k:'D',en:"Student grades",vi:"Diem so hoc sinh"}],
      ans:'C', exp:"Nam 2013, COPPA mo rong bao ve them <strong>dia chi IP, du lieu vi tri dia ly va cac dinh danh truc tuyen</strong> cua tre em duoi 13 tuoi." },

    { en:"What does CFAA stand for?",
      vi:"CFAA la viet tat cua:",
      opts:[{k:'A',en:"Computer Freedom Act Authority",vi:"Co quan Tu do May tinh"},{k:'B',en:"Computer Fraud and Abuse Act",vi:"Dao luat Gian lan va Lam dung May tinh"},{k:'C',en:"Cyber Facial Access Agreement",vi:"Thoa thuan Truy cap Khuon mat Mang"},{k:'D',en:"Content Filtering Audit Act",vi:"Dao luat Kiem toan Loc Noi dung"}],
      ans:'B', exp:"<strong>CFAA = Computer Fraud and Abuse Act</strong> - luat lien bang My ve toi pham mang, cam truy cap trai phep vao he thong may tinh." },

    { en:"What can violate the CFAA?",
      vi:"Dieu gi co the vi pham CFAA?",
      opts:[{k:'A',en:"Violating a platform's terms of service",vi:"Vi pham dieu khoan dich vu cua nen tang"},{k:'B',en:"Posting public content on social media",vi:"Dang noi dung cong khai tren mang xa hoi"},{k:'C',en:"Sharing non-sensitive data",vi:"Chia se du lieu khong nhay cam"},{k:'D',en:"Allowing access to third-party applications",vi:"Cho phep truy cap vao ung dung ben thu ba"}],
      ans:'A', exp:"Theo mot so an le, <strong>vi pham dieu khoan dich vu (ToS)</strong> cua nen tang co the cau thanh vi pham CFAA - dac biet khi lien quan den truy cap vuot qua quyen han cho phep." },

    { en:"What privacy concern arises from government surveillance of social media?",
      vi:"Lo ngai quyen rieng tu nao phat sinh tu viec chinh phu giam sat mang xa hoi?",
      opts:[{k:'A',en:"Government overreach and violation of privacy rights",vi:"Chinh phu vuot quyen va vi pham quyen rieng tu"},{k:'B',en:"Limitation on freedom of speech",vi:"Gioi han tu do ngon luan"},{k:'C',en:"Over-monitoring of advertisements",vi:"Giam sat qua muc cac quang cao"},{k:'D',en:"Restriction of user-generated content",vi:"Han che noi dung nguoi dung tao ra"}],
      ans:'A', exp:"Lo ngai chinh: <strong>chinh phu vuot quyen (government overreach)</strong> - giam sat qua rong vi pham quyen rieng tu cua cong dan, dac biet khi khong co lenh toa." },

    { en:"Which of the following is an example of data collection done by Big Tech companies?",
      vi:"Dieu nao sau day la vi du ve viec thu thap du lieu cua cac cong ty Big Tech?",
      opts:[{k:'A',en:"Facial recognition",vi:"Nhan dien khuon mat"},{k:'B',en:"Public speech monitoring",vi:"Theo doi phat ngon cong khai"},{k:'C',en:"Copyright infringement detection",vi:"Phat hien vi pham ban quyen"},{k:'D',en:"Anti-terrorism measures",vi:"Bien phap chong khung bo"}],
      ans:'A', exp:"<strong>Nhan dien khuon mat</strong> la vi du dien hinh nhat va gay tranh cai nhat ve viec Big Tech thu thap du lieu sinh trac hoc ma thieu su dong y ro rang." },

    { en:"Most users are unaware of:",
      vi:"Hau het nguoi dung khong biet ve:",
      opts:[{k:'A',en:"Their device model",vi:"Mau thiet bi cua ho"},{k:'B',en:"How much data is collected about them",vi:"Bao nhieu du lieu duoc thu thap ve ho"},{k:'C',en:"Who created their apps",vi:"Ai da tao ra ung dung cua ho"},{k:'D',en:"Cookie expiration",vi:"Thoi han het han cua cookie"}],
      ans:'B', exp:"Khi bam 'Toi dong y' voi vang, hau het nguoi dung khong biet duoc cac nen tang dang am tham thu thap <strong>khoi luong du lieu khong lo</strong> den muc nao." },

    { en:"Why are cross-border data transfers a challenge for privacy regulation?",
      vi:"Tai sao viec chuyen du lieu xuyen bien gioi la thach thuc cho quy dinh quyen rieng tu?",
      opts:[{k:'A',en:"They complicate the enforcement of consistent privacy protections",vi:"Chung gay kho khan trong viec thuc thi bao ve quyen rieng tu nhat quan"},{k:'B',en:"They reduce the amount of data companies can collect",vi:"Chung giam luong du lieu cong ty co the thu thap"},{k:'C',en:"They restrict international communication",vi:"Chung han che giao tiep quoc te"},{k:'D',en:"They simplify user consent requirements",vi:"Chung don gian hoa yeu cau dong y cua nguoi dung"}],
      ans:'A', exp:"Su chenh lech luat phap giua cac nuoc khien viec ap dung mot tieu chuan bao ve nhat quan tro thanh bai toan dau dau - ly do GDPR co quy dinh nghiem ngat ve <strong>chuyen du lieu ra ngoai EU</strong>." },

    { en:"How does the 'Right to be Forgotten' impact search engines?",
      vi:"'Quyen duoc lang quen' anh huong den cac cong cu tim kiem nhu the nao?",
      opts:[{k:'A',en:"They must delete all history every year",vi:"Ho phai xoa toan bo lich su hang nam"},{k:'B',en:"They may be required to remove links to personal information that is inadequate, irrelevant, or excessive",vi:"Ho co the bi yeu cau xoa cac lien ket dan den thong tin ca nhan khong day du, khong lien quan hoac qua muc"},{k:'C',en:"They must charge users for data storage",vi:"Ho phai tinh phi nguoi dung cho viec luu tru du lieu"},{k:'D',en:"They can no longer collect cookies",vi:"Ho khong con duoc phep thu thap cookie"}],
      ans:'B', exp:"Theo GDPR, ca nhan co quyen yeu cau <strong>Google go bo cac duong link</strong> dan den thong tin ca nhan qua khu khong con dung su that hoac khong con gia tri cong cong." },

    { en:"How does privacy law define personal data?",
      vi:"Luat quyen rieng tu dinh nghia du lieu ca nhan nhu the nao?",
      opts:[{k:'A',en:"Only public information",vi:"Chi thong tin cong khai"},{k:'B',en:"Any information relating to an identified or identifiable natural person",vi:"Bat ky thong tin nao lien quan den mot the nhan da duoc xac dinh hoac co the nhan dang duoc"},{k:'C',en:"Only financial records",vi:"Chi ho so tai chinh"},{k:'D',en:"Only government IDs",vi:"Chi giay to tuy than do chinh phu cap"}],
      ans:'B', exp:"'Du lieu ca nhan' rong hon ban tuong - khong chi CCCD hay the ngan hang, ma la <strong>BAT KY thong tin gi co the dung de xac dinh danh tinh ban</strong>, ke ca dia chi IP, cookie, du lieu dinh vi." },

    { en:"What is the legal risk of scraping data from social media platforms?",
      vi:"Rui ro phap ly cua viec cao du lieu tu cac nen tang mang xa hoi la gi?",
      opts:[{k:'A',en:"It violates the platforms' Terms of Service and could lead to CFAA claims",vi:"No vi pham Dieu khoan dich vu cua nen tang va co the dan den khieu nai theo CFAA"},{k:'B',en:"It is always legal if the data is public",vi:"No luon hop phap neu du lieu la cong khai"},{k:'C',en:"It increases the platform's traffic",vi:"No lam tang luu luong truy cap cua nen tang"},{k:'D',en:"It improves the platform's algorithms",vi:"No cai thien thuat toan cua nen tang"}],
      ans:'A', exp:"Du du lieu co ve cong khai, viec dung robot tu dong <strong>scraping</strong> bi cam trong ToS. Tai My, nen tang co the dung <strong>CFAA</strong> de kien toi truy cap trai phep hoac vuot qua quyen han." },

    { en:"Why are strict data retention policies important under GDPR?",
      vi:"Tai sao cac chinh sach luu giu du lieu nghiem ngat lai quan trong theo GDPR?",
      opts:[{k:'A',en:"To increase server costs",vi:"De tang chi phi may chu"},{k:'B',en:"To ensure data is not kept longer than necessary for the stated purpose",vi:"De dam bao du lieu khong bi giu lau hon muc can thiet cho muc dich da neu"},{k:'C',en:"To allow unlimited data storage",vi:"De cho phep luu tru du lieu khong gioi han"},{k:'D',en:"To facilitate easy data selling",vi:"De tao dieu kien cho viec ban du lieu de dang"}],
      ans:'B', exp:"Nguyen tac <strong>'gioi han luu tru'</strong> cua GDPR: xoa du lieu ca nhan ngay khi muc dich thu thap ban dau da hoan thanh - giam thieu rui ro ro ri." },
  ],

  la: [
    { en:"What is the relationship between law and ethics when constructing a legal argument?",
      vi:"Moi quan he giua luat phap va dao duc khi xay dung mot lap luan phap ly la gi?",
      opts:[{k:'A',en:"Law provides the framework, while ethics guide the approach and fairness of the argument",vi:"Luat phap cung cap khung, trong khi dao duc dinh huong cach tiep can va tinh cong bang"},{k:'B',en:"Law supersedes ethics in all cases",vi:"Luat phap vuot len tren dao duc trong moi truong hop"},{k:'C',en:"Ethics should be disregarded if the legal argument is strong",vi:"Nen bo qua dao duc neu lap luan phap ly manh me"},{k:'D',en:"Law and ethics are unrelated in legal arguments",vi:"Luat phap va dao duc khong lien quan den nhau"}],
      ans:'A', exp:"Luat phap la nen tang cot loi. Dao duc la <strong>'la ban'</strong> giup luat su dien giai va ap dung phap luat mot cach nhan van, cong bang thay vi may moc va tan nhan." },

    { en:"What is the primary purpose of constructing a legal argument in a business dispute?",
      vi:"Muc dich chinh cua viec xay dung mot lap luan phap ly trong tranh chap kinh doanh la gi?",
      opts:[{k:'A',en:"To confuse the opposing party",vi:"De lam doi phuong boi roi"},{k:'B',en:"To justify unethical behavior",vi:"De bien minh cho hanh vi phi dao duc"},{k:'C',en:"To present a logical and well-supported position to convince others",vi:"De trinh bay mot quan diem logic va duoc ho tro tot nham thuyet phuc nguoi khac"},{k:'D',en:"To avoid legal responsibility",vi:"De tron tranh trach nhiem phap ly"}],
      ans:'C', exp:"Muc tieu la <strong>xau chuoi du kien thuc te va dieu luat thanh duong day logic sac ben</strong>, tu do thuyet phuc tham phan hoac doi tac dong y voi quan diem cua minh." },

    { en:"What is the importance of clarity when constructing a legal argument?",
      vi:"Tam quan trong cua tinh ro rang khi xay dung mot lap luan phap ly la gi?",
      opts:[{k:'A',en:"Clarity ensures that the argument is easily understood and persuasive, reducing ambiguity",vi:"Tinh ro rang dam bao lap luan de hieu va mang tinh thuyet phuc, giam thieu su mo ho"},{k:'B',en:"It allows for more complex legal terms that might confuse the opponent",vi:"No cho phep su dung thuat ngu phap ly phuc tap hon co the lam doi thu boi roi"},{k:'C',en:"It makes the argument appear less strong",vi:"No lam cho lap luan co ve kem manh me hon"},{k:'D',en:"It helps the opposing party find loopholes",vi:"No giup doi phuong tim ra so ho"}],
      ans:'A', exp:"Trong nghe luat, <strong>noi mo ho khong lam ban nguy hiem</strong> - chi lam lap luan yeu di. Mot lap luan ro rang giup tham phan nam bat logic de dang hon." },

    { en:"What is the impact of presenting an ethically questionable argument in a legal case?",
      vi:"Tac dong cua viec dua ra mot lap luan co van de ve mat dao duc trong vu an phap ly la gi?",
      opts:[{k:'A',en:"It can increase the chances of winning",vi:"No co the lam tang co hoi chien thang"},{k:'B',en:"It can damage your reputation, cause legal consequences, and undermine the integrity of the case",vi:"No co the lam ton hai danh tieng, gay ra hau qua phap ly, va lam suy yeu tinh liem chinh cua vu an"},{k:'C',en:"It will lead to a faster resolution",vi:"No se dan den giai quyet nhanh hon"},{k:'D',en:"It makes the argument appear more persuasive",vi:"No lam cho lap luan co ve thuyet phuc hon"}],
      ans:'B', exp:"Su dung bang chung nguy tao hoac lap luan vi pham dao duc khong chi <strong>lam suy yeu niem tin cua tham phan</strong>, ma con co the khien luat su bi tuoc giay phep hanh nghe." },

    { en:"What is a challenge of enforcing moral rights online across jurisdictions?",
      vi:"Thach thuc cua viec thuc thi quyen nhan than truc tuyen xuyen quoc gia la gi?",
      opts:[{k:'A',en:"Lack of fair use law",vi:"Thieu luat su dung hop ly"},{k:'B',en:"Different recognition and scope of moral rights in different countries",vi:"Su cong nhan va pham vi khac nhau cua quyen nhan than o cac quoc gia"},{k:'C',en:"Overlap with patent law",vi:"Chong cheo voi luat sang che"},{k:'D',en:"Ban on Creative Commons",vi:"Lenh cam doi voi Creative Commons"}],
      ans:'B', exp:"Chau Au bao ve quyen nhan than rat manh nhung My thi yeu hon. Su <strong>xung dot phap ly giua cac nuoc</strong> khien viec giai quyet tranh chap tren moi truong Internet cuc ky kho khan." },

    { en:"What is the primary legal challenge when government agencies request data from social media platforms?",
      vi:"Thach thuc phap ly chinh khi co quan chinh phu yeu cau du lieu tu nen tang mang xa hoi la gi?",
      opts:[{k:'A',en:"Ensuring that the data request complies with privacy laws while balancing the need for security",vi:"Dam bao yeu cau du lieu tuan thu luat quyen rieng tu dong thoi can bang voi nhu cau an ninh"},{k:'B',en:"Protecting intellectual property rights of the social media platforms",vi:"Bao ve quyen so huu tri tue cua nen tang mang xa hoi"},{k:'C',en:"Making sure the social media platforms are compensated for data access",vi:"Dam bao nen tang duoc boi thuong cho viec truy cap du lieu"},{k:'D',en:"Ensuring that data is shared only with law enforcement and not third parties",vi:"Dam bao du lieu chi duoc chia se voi luc luong thuc thi phap luat"}],
      ans:'A', exp:"Bai toan hoc bua: vua lay thong tin phuc vu dieu tra (<strong>an ninh</strong>), ma lai khong xam pham qua sau vao quyen rieng tu (<strong>privacy laws</strong>) cua nhung nguoi dung vo toi." },

    { en:"What does 'reputation' mean in a passing-off case?",
      vi:"Trong vu kien passing-off, 'reputation' co y nghia gi?",
      opts:[{k:'A',en:"The business is well-known globally",vi:"Doanh nghiep noi tieng toan cau"},{k:'B',en:"The business has specific goodwill among consumers in a certain territory",vi:"Doanh nghiep co goodwill nhat dinh doi voi nguoi tieu dung trong mot khu vuc"},{k:'C',en:"The owner is a celebrity",vi:"Chu so huu la nguoi noi tieng"},{k:'D',en:"The business has many social media followers",vi:"Doanh nghiep co nhieu nguoi theo doi tren mang xa hoi"}],
      ans:'B', exp:"Khong can noi tieng toan cau. Chi can o <strong>khu vuc kinh doanh cu the</strong>, khach hang nhan ra va tin tuong thuong hieu cua ban la du dieu kien kien passing-off." },

    { en:"Which ethical issue arises when journalists use anonymous sources from social media?",
      vi:"Van de dao duc nao nay sinh khi nha bao su dung nguon tin an danh tu mang xa hoi?",
      opts:[{k:'A',en:"The lack of accountability and the risk of spreading unverified or false information",vi:"Su thieu trach nhiem giai trinh va nguy co lan truyen thong tin chua duoc xac minh hoac sai su that"},{k:'B',en:"It increases the article's word count",vi:"No lam tang so luong tu cua bai bao"},{k:'C',en:"It violates the platform's terms of service",vi:"No vi pham dieu khoan dich vu cua nen tang"},{k:'D',en:"It generates more ad revenue",vi:"No tao ra nhieu doanh thu quang cao hon"}],
      ans:'A', exp:"Trich dan tai khoan an danh la canh bac lon: <strong>khong the quy trach nhiem cho ai neu thong tin la bia dat</strong>, de bien to bao thanh cong cu lan truyen tin gia." },

    { en:"What is the risk of not having a social media policy in a company?",
      vi:"Rui ro cua viec khong co chinh sach mang xa hoi trong cong ty la gi?",
      opts:[{k:'A',en:"Fewer followers",vi:"It nguoi theo doi hon"},{k:'B',en:"Loss of control over messaging, potential legal liability, and brand damage",vi:"Mat kiem soat ve thong diep, nguy co chiu trach nhiem phap ly va ton hai thuong hieu"},{k:'C',en:"Lower ad revenue",vi:"Doanh thu quang cao thap hon"},{k:'D',en:"More customer complaints",vi:"Nhieu khieu nai cua khach hang hon"}],
      ans:'B', exp:"Khong co chinh sach ro rang, nhan vien co the vo tinh phat ngon sai lech, lam ro ri bi mat cong ty, hoac gay <strong>rac roi phap ly nghiem trong va sup do hinh anh thuong hieu</strong>." },

    { en:"What is the main objective of a social media policy in a corporate environment?",
      vi:"Muc tieu chinh cua chinh sach mang xa hoi trong doanh nghiep la gi?",
      opts:[{k:'A',en:"To restrict personal internet use",vi:"De han che viec su dung internet ca nhan"},{k:'B',en:"To provide guidelines on acceptable behavior, protect brand reputation, and manage legal risks",vi:"De cung cap huong dan ve hanh vi co the chap nhan, bao ve danh tieng thuong hieu va quan ly rui ro phap ly"},{k:'C',en:"To promote the company's products",vi:"De quang ba san pham cua cong ty"},{k:'D',en:"To monitor employee emails",vi:"De giam sat email cua nhan vien"}],
      ans:'B', exp:"Chinh sach MXH tot <strong>ve ra 'vung an toan'</strong>, chi dan nhan vien cach hanh xu chuyen nghiep, vua bao ve hinh anh thuong hieu vua triet tieu cac rui ro phap ly." },

    { en:"What is the consequence of failing to establish an employer-employee relationship regarding a created work?",
      vi:"Hau qua cua viec khong thiet lap duoc moi quan he nguoi su dung lao dong - nhan vien doi voi tac pham duoc tao ra la gi?",
      opts:[{k:'A',en:"The employer automatically owns it",vi:"Nguoi su dung lao dong tu dong so huu no"},{k:'B',en:"The employee may retain the copyright as an independent contractor",vi:"Nguoi lao dong co the giu lai ban quyen voi tu cach la nha thau doc lap"},{k:'C',en:"The work becomes public domain",vi:"Tac pham tro thanh tai san cong cong"},{k:'D',en:"The government claims it",vi:"Chinh phu doi lai no"}],
      ans:'B', exp:"Neu cong ty thue ban thiet ke ma khong ky hop dong ro rang (bien ban thanh 'freelancer'), luat dung ve phia ban: <strong>BAN la tac gia va BAN giu ban quyen</strong>." },

    { en:"How can businesses demonstrate transparent communication on social media?",
      vi:"Lam the nao doanh nghiep co the the hien su giao tiep minh bach tren mang xa hoi?",
      opts:[{k:'A',en:"By ignoring negative comments",vi:"Bang cach phot lo cac binh luan tieu cuc"},{k:'B',en:"By sharing only positive reviews",vi:"Bang cach chi chia se nhung danh gia tich cuc"},{k:'C',en:"By being open about their practices and addressing issues publicly",vi:"Bang cach co mo ve hoat dong va giai quyet cong khai cac van de"},{k:'D',en:"By using automated responses for all inquiries",vi:"Bang cach su dung cau tra loi tu dong cho moi thac mac"}],
      ans:'C', exp:"Su minh bach khong phai la che giau cai xau, ma la <strong>thai do co mo, trung thuc, doi mat va xu ly cong khai</strong> khi gap su co hay khieu nai." },

    { en:"Why is it ethically important to disclose AI-generated content in journalism?",
      vi:"Tai sao viec cong khai noi dung do AI tao ra lai quan trong ve mat dao duc trong bao chi?",
      opts:[{k:'A',en:"To show off technology",vi:"De pho dien cong nghe"},{k:'B',en:"To maintain transparency and prevent misleading the audience about the source of information",vi:"De duy tri tinh minh bach va ngan chan viec lua doi khan gia ve nguon thong tin"},{k:'C',en:"To reduce the need for editors",vi:"De giam nhu cau ve bien tap vien"},{k:'D',en:"To comply with software licenses",vi:"De tuan thu cac giay phep phan mem"}],
      ans:'B', exp:"Khan gia co quyen duoc biet thong tin la do con nguoi viet hay do may tong hop. <strong>Minh bach ve nguon goc AI</strong> bao ve uy tin to bao va ngan chan tin gia." },
  ],
};

// ============================================================
// TRANG THAI
// ============================================================
const state = {};
Object.keys(QDB).forEach(t => {
  state[t] = { cur: 0, correct: 0, wrong: 0, answered: false };
});

// ============================================================
// TONG QUAN
// ============================================================
function buildOverview() {
  const grid = document.getElementById('overview-grid');
  if (!grid) return;
  grid.innerHTML = '';
  Object.entries(TOPICS).forEach(([id, info]) => {
    const qs   = QDB[id];
    const s    = state[id];
    const done = s.correct + s.wrong;
    const pct  = qs.length ? Math.round(done / qs.length * 100) : 0;
    const scoreText = done > 0 ? Math.round(s.correct / done * 100) + '%' : '--';
    const card = document.createElement('div');
    card.className = 'ov-card';
    card.onclick   = function() { switchTab(id); };
    card.innerHTML =
      '<div class="ov-icon" style="font-family:var(--mono);font-size:13px;font-weight:700;color:' + info.color + ';margin-bottom:10px;">' + info.icon + '</div>' +
      '<div class="ov-name" style="color:' + info.color + '">' + info.name + '</div>' +
      '<div class="ov-vi">' + info.vi + '</div>' +
      '<div class="ov-bar"><div class="ov-fill" style="width:' + pct + '%;background:' + info.color + '"></div></div>' +
      '<div class="ov-stats"><span>' + qs.length + ' cau hoi</span><span class="' + (done > 0 ? 'done' : '') + '">' + (done > 0 ? scoreText + ' dung' : 'Chua lam') + '</span></div>';
    grid.appendChild(card);
  });
}

// ============================================================
// CHUYEN TAB
// ============================================================
function switchTab(id) {
  // An tat ca trang
  var pages = document.querySelectorAll('.topic-page');
  for (var i = 0; i < pages.length; i++) {
    pages[i].classList.remove('active');
  }
  // Bo active tat ca tab buttons
  var tabs = document.querySelectorAll('.tab-btn');
  for (var j = 0; j < tabs.length; j++) {
    tabs[j].classList.remove('active');
  }
  // Hien trang dung
  var page = document.getElementById('page-' + id);
  if (page) page.classList.add('active');

  // Tim va active dung button (theo onclick attribute)
  for (var k = 0; k < tabs.length; k++) {
    var onclickVal = tabs[k].getAttribute('onclick') || '';
    if (onclickVal.indexOf("'" + id + "'") !== -1) {
      tabs[k].classList.add('active');
      break;
    }
  }

  if (id !== 'home') {
    loadQ(id);
  } else {
    buildOverview();
  }
  window.scrollTo(0, 0);
}

// ============================================================
// TAI CAU HOI
// ============================================================
function loadQ(t) {
  var s  = state[t];
  var qs = QDB[t];

  if (!qs || qs.length === 0) return;
  if (s.cur >= qs.length) { showFinal(t); return; }

  s.answered = false;
  var q = qs[s.cur];

  // Cap nhat count va sr
  var cntEl = document.getElementById('cnt-' + t);
  if (cntEl) cntEl.textContent = qs.length;
  var srEl = document.getElementById('sr-' + t);
  if (srEl) srEl.textContent = qs.length - s.cur;

  // Progress
  var pct = Math.round(s.cur / qs.length * 100);
  var ptextEl = document.getElementById('ptext-' + t);
  if (ptextEl) ptextEl.textContent = 'Cau ' + (s.cur + 1) + ' / ' + qs.length;
  var ppctEl = document.getElementById('ppct-' + t);
  if (ppctEl) ppctEl.textContent = pct + '%';
  var pfillEl = document.getElementById('pfill-' + t);
  if (pfillEl) pfillEl.style.width = pct + '%';

  // So cau
  var qnumEl = document.getElementById('qnum-' + t);
  if (qnumEl) qnumEl.textContent = 'CAU ' + String(s.cur + 1).padStart(2, '0');

  // Cau hoi
  var qenEl = document.getElementById('qen-' + t);
  if (qenEl) qenEl.textContent = q.en;
  var qviEl = document.getElementById('qvi-' + t);
  if (qviEl) qviEl.textContent = q.vi;

  // Dap an
  var optEl = document.getElementById('opts-' + t);
  if (!optEl) return;
  optEl.innerHTML = '';
  q.opts.forEach(function(o) {
    var btn = document.createElement('button');
    btn.className = 'opt-btn';
    btn.setAttribute('data-key', o.k);
    btn.innerHTML =
      '<div class="opt-key">' + o.k + '</div>' +
      '<div class="opt-text">' +
        '<div class="opt-en">' + o.en + '</div>' +
        '<div class="opt-vi">' + o.vi + '</div>' +
      '</div>';
    btn.onclick = function() { selectA(t, o.k); };
    optEl.appendChild(btn);
  });

  // Reset result box
  var rbEl = document.getElementById('rb-' + t);
  if (rbEl) rbEl.className = 'result-box';

  // An nut next
  var nbEl = document.getElementById('nb-' + t);
  if (nbEl) nbEl.classList.remove('show');

  // Animation card
  var cardEl = document.getElementById('card-' + t);
  if (cardEl) {
    cardEl.style.display = '';
    cardEl.style.animation = 'none';
    void cardEl.offsetHeight; // reflow
    cardEl.style.animation = 'cardIn 0.35s cubic-bezier(.4,0,.2,1)';
  }

  // An final screen
  var finEl = document.getElementById('fin-' + t);
  if (finEl) finEl.classList.remove('show');
}

// ============================================================
// CHON DAP AN
// ============================================================
function selectA(t, key) {
  var s = state[t];
  if (s.answered) return;
  s.answered = true;

  var q    = QDB[t][s.cur];
  var isOK = (key === q.ans);
  if (isOK) s.correct++; else s.wrong++;

  // Cap nhat so dung/sai
  var scEl = document.getElementById('sc-' + t);
  if (scEl) scEl.textContent = s.correct;
  var swEl = document.getElementById('sw-' + t);
  if (swEl) swEl.textContent = s.wrong;

  var done = s.correct + s.wrong;
  var scoreEl = document.getElementById('score-' + t);
  if (scoreEl) scoreEl.textContent = Math.round(s.correct / done * 100) + '%';

  // To mau cac lua chon
  var btns = document.querySelectorAll('#opts-' + t + ' .opt-btn');
  for (var i = 0; i < btns.length; i++) {
    btns[i].disabled = true;
    var k = btns[i].getAttribute('data-key');
    if (k === q.ans) {
      btns[i].classList.add('correct');
    } else if (k === key && !isOK) {
      btns[i].classList.add('wrong');
    } else {
      btns[i].classList.add('dimmed');
    }
  }

  // Hien result box
  var rbEl  = document.getElementById('rb-'  + t);
  var rbtEl = document.getElementById('rbt-' + t);
  var rbeEl = document.getElementById('rbe-' + t);
  if (rbEl && rbtEl && rbeEl) {
    if (isOK) {
      rbEl.className = 'result-box rb-correct show';
      rbtEl.textContent = 'CHINH XAC';
    } else {
      rbEl.className = 'result-box rb-wrong show';
      rbtEl.textContent = 'SAI - Dap an dung la ' + q.ans;
    }
    rbeEl.innerHTML = q.exp;
  }

  // Hien nut tiep theo
  var nbEl = document.getElementById('nb-' + t);
  if (nbEl) {
    nbEl.textContent = s.cur < QDB[t].length - 1 ? 'Cau tiep theo' : 'Xem ket qua';
    nbEl.classList.add('show');
  }
}

// ============================================================
// CAU TIEP THEO
// ============================================================
function nextQ(t) {
  state[t].cur++;
  loadQ(t);
}

// ============================================================
// MAN HINH KET QUA
// ============================================================
function showFinal(t) {
  var cardEl = document.getElementById('card-' + t);
  if (cardEl) cardEl.style.display = 'none';

  var s     = state[t];
  var total = QDB[t].length;
  var pct   = Math.round(s.correct / total * 100);

  var pfillEl = document.getElementById('pfill-' + t);
  if (pfillEl) pfillEl.style.width = '100%';
  var ppctEl = document.getElementById('ppct-' + t);
  if (ppctEl) ppctEl.textContent = '100%';

  var fgEl = document.getElementById('fg-' + t);
  if (fgEl) fgEl.textContent = pct + '%';
  var fscEl = document.getElementById('fsc-' + t);
  if (fscEl) fscEl.textContent = s.correct;
  var fswEl = document.getElementById('fsw-' + t);
  if (fswEl) fswEl.textContent = s.wrong;

  var msg = pct === 100 ? 'Xuat sac! Nam vung hoan toan.' :
            pct >= 70   ? 'Tot! On lai phan con sai.' :
                          'Can on lai. Hay thu lai!';
  var fmEl = document.getElementById('fm-' + t);
  if (fmEl) fmEl.textContent = msg;

  var finEl = document.getElementById('fin-' + t);
  if (finEl) finEl.classList.add('show');

  buildOverview();
}

// ============================================================
// LAM LAI
// ============================================================
function restartTopic(t) {
  state[t] = { cur: 0, correct: 0, wrong: 0, answered: false };
  var scEl = document.getElementById('sc-' + t);
  if (scEl) scEl.textContent = '0';
  var swEl = document.getElementById('sw-' + t);
  if (swEl) swEl.textContent = '0';
  var scoreEl = document.getElementById('score-' + t);
  if (scoreEl) scoreEl.textContent = '-';
  var cardEl = document.getElementById('card-' + t);
  if (cardEl) cardEl.style.display = '';
  loadQ(t);
}

// ============================================================
// KHOI TAO
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
  // Set count cho tat ca topic
  Object.keys(QDB).forEach(function(t) {
    var cntEl = document.getElementById('cnt-' + t);
    if (cntEl) cntEl.textContent = QDB[t].length;
    var srEl = document.getElementById('sr-' + t);
    if (srEl) srEl.textContent = QDB[t].length;
  });
  // Build overview
  buildOverview();
});
