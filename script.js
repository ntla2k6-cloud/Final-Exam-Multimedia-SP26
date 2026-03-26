// ============================================================
// LAE101 QUIZ - DỮ LIỆU NGUỒN MỚI HOÀN TOÀN
// ============================================================

const TOPICS = {
  ip:  { name:'Intellectual Property Rights', vi:'Sở Hữu Trí Tuệ',        icon:'📖', color:'#4f8ef7' },
  tm:  { name:'Trade Mark & Get-Up',          vi:'Nhãn Hiệu & Thương Hiệu', icon:'®',  color:'#7c5af0' },
  cr:  { name:'Copyright & Fair Dealing',     vi:'Bản Quyền & Sử Dụng Hợp Lý', icon:'©', color:'#2dd4f7' },
  dr:  { name:'Design Rights',               vi:'Quyền Thiết Kế',          icon:'✏', color:'#f7c948' },
  sm:  { name:'Social Media Law',            vi:'Luật Mạng Xã Hội',        icon:'📱', color:'#1fd67a' },
  li:  { name:'Licensing & Agreements',      vi:'Cấp Phép & Hợp Đồng',     icon:'📄', color:'#f79348' },
  pr:  { name:'Privacy & Data Protection',   vi:'Quyền Riêng Tư & Dữ Liệu', icon:'🔒', color:'#f75f5f' },
  la:  { name:'Legal Arguments & Ethics',    vi:'Lập Luận Pháp Lý & Đạo Đức', icon:'⚖', color:'#c084fc' },
};

// ============================================================
// NGÂN HÀNG CÂU HỎI - NGUỒN MỚI HOÀN TOÀN
// ============================================================
const QDB = {

  // ── SỞ HỮU TRÍ TUỆ ─────────────────────────────────────────
  ip: [
    { en:"Which international agreement aims to harmonize IP standards?",
      vi:"Hiệp định quốc tế nào nhằm hài hòa hóa các tiêu chuẩn sở hữu trí tuệ?",
      opts:[{k:'A',en:"Paris Convention",vi:"Công ước Paris"},{k:'B',en:"TRIPS Agreement",vi:"Hiệp định TRIPS"},{k:'C',en:"Berne Convention",vi:"Công ước Berne"},{k:'D',en:"Madrid Protocol",vi:"Nghị định thư Madrid"}],
      ans:'B', exp:`<strong>Hiệp định TRIPS</strong> (Trade-Related Aspects of Intellectual Property Rights) là hiệp định toàn diện nhất thiết lập các tiêu chuẩn tối thiểu về bảo hộ và thực thi quyền sở hữu trí tuệ trên phạm vi toàn cầu.` },

    { en:"Which organization enforces the TRIPS Agreement?",
      vi:"Tổ chức nào thực thi Hiệp định TRIPS?",
      opts:[{k:'A',en:"World Health Organization (WHO)",vi:"Tổ chức Y tế Thế giới (WHO)"},{k:'B',en:"World Trade Organization (WTO)",vi:"Tổ chức Thương mại Thế giới (WTO)"},{k:'C',en:"United Nations (UN)",vi:"Liên Hợp Quốc (UN)"},{k:'D',en:"World Intellectual Property Organization (WIPO)",vi:"Tổ chức Sở hữu Trí tuệ Thế giới (WIPO)"}],
      ans:'B', exp:`<strong>WTO</strong> là cơ quan quản lý và có cơ chế giải quyết tranh chấp để đảm bảo các quốc gia thành viên tuân thủ các quy định của Hiệp định TRIPS.` },

    { en:"What do patents primarily protect?",
      vi:"Bằng sáng chế chủ yếu bảo vệ điều gì?",
      opts:[{k:'A',en:"Original literary works",vi:"Các tác phẩm văn học gốc"},{k:'B',en:"Brand names and logos",vi:"Tên thương hiệu và logo"},{k:'C',en:"Inventions and new technical solutions",vi:"Các phát minh và giải pháp kỹ thuật mới"},{k:'D',en:"The visual design of a product",vi:"Thiết kế trực quan của một sản phẩm"}],
      ans:'C', exp:`<strong>Bằng sáng chế (Patents)</strong> được cấp riêng cho các phát minh, quy trình hoặc giải pháp kỹ thuật mới có khả năng áp dụng vào công nghiệp.` },

    { en:"What do trademarks protect?",
      vi:"Nhãn hiệu bảo vệ điều gì?",
      opts:[{k:'A',en:"Literary works",vi:"Tác phẩm văn học"},{k:'B',en:"Brand names, logos, and symbols",vi:"Tên thương hiệu, logo và biểu tượng"},{k:'C',en:"Technical inventions",vi:"Các phát minh kỹ thuật"},{k:'D',en:"Trade secrets",vi:"Bí mật thương mại"}],
      ans:'B', exp:`<strong>Nhãn hiệu (Trademarks)</strong> bảo vệ các dấu hiệu nhận diện giúp người tiêu dùng phân biệt hàng hóa/dịch vụ của doanh nghiệp này với doanh nghiệp khác.` },

    { en:"What does copyright protect?",
      vi:"Bản quyền bảo vệ điều gì?",
      opts:[{k:'A',en:"Ideas and concepts",vi:"Ý tưởng và khái niệm"},{k:'B',en:"Original literary, artistic, and musical works",vi:"Các tác phẩm văn học, nghệ thuật và âm nhạc gốc"},{k:'C',en:"Industrial machines",vi:"Máy móc công nghiệp"},{k:'D',en:"Company names",vi:"Tên công ty"}],
      ans:'B', exp:`<strong>Bản quyền (Copyright)</strong> bảo vệ cách thể hiện của một ý tưởng dưới dạng các tác phẩm văn học, nghệ thuật, âm nhạc, phim ảnh... chứ không bảo vệ bản thân ý tưởng đó.` },

    { en:"What is the primary function of a trademark?",
      vi:"Chức năng chính của nhãn hiệu là gì?",
      opts:[{k:'A',en:"To reward inventors",vi:"Để khen thưởng các nhà phát minh"},{k:'B',en:"To identify the source of goods or services and prevent consumer confusion",vi:"Để xác định nguồn gốc của hàng hóa hoặc dịch vụ và ngăn ngừa sự nhầm lẫn của người tiêu dùng"},{k:'C',en:"To protect private information",vi:"Để bảo vệ thông tin riêng tư"},{k:'D',en:"To encourage reading",vi:"Để khuyến khích việc đọc sách"}],
      ans:'B', exp:`Mục đích cốt lõi của nhãn hiệu là giúp khách hàng nhận diện chính xác ai là người cung cấp sản phẩm/dịch vụ, từ đó tránh việc mua nhầm hàng giả, hàng nhái.` },

    { en:"What is the main purpose of the patent system?",
      vi:"Mục đích chính của hệ thống bằng sáng chế là gì?",
      opts:[{k:'A',en:"To keep inventions secret forever",vi:"Để giữ bí mật các phát minh mãi mãi"},{k:'B',en:"To encourage innovation by granting inventors a temporary monopoly in exchange for public disclosure",vi:"Để khuyến khích đổi mới bằng cách cấp độc quyền tạm thời để đổi lấy việc công bố công khai phát minh"},{k:'C',en:"To control the price of goods",vi:"Để kiểm soát giá cả hàng hóa"},{k:'D',en:"To replace trademarks",vi:"Để thay thế nhãn hiệu"}],
      ans:'B', exp:`Hệ thống bằng sáng chế là một "bản hợp đồng": nhà phát minh được <strong>độc quyền khai thác (thường 20 năm)</strong>, bù lại họ phải công khai chi tiết kỹ thuật để xã hội có thể học hỏi và tiếp tục phát triển.` },

    { en:"What can overly strict IP enforcement lead to?",
      vi:"Việc thực thi IP quá nghiêm ngặt có thể dẫn đến điều gì?",
      opts:[{k:'A',en:"Creative freedom",vi:"Tự do sáng tạo"},{k:'B',en:"Stifled innovation and reduced idea sharing",vi:"Kìm hãm đổi mới và giảm chia sẻ ý tưởng"},{k:'C',en:"Economic growth",vi:"Tăng trưởng kinh tế"},{k:'D',en:"Clear fair use guidelines",vi:"Hướng dẫn sử dụng hợp lý rõ ràng"}],
      ans:'B', exp:`Khi IP được thực thi quá cứng nhắc, nó có thể <strong>kìm hãm đổi mới</strong> vì mọi người sợ bị kiện khi sử dụng hoặc phát triển ý tưởng dựa trên ý tưởng hiện có.` },

    { en:"How does IPR affect international trade agreements?",
      vi:"Quyền sở hữu trí tuệ ảnh hưởng đến các hiệp định thương mại quốc tế như thế nào?",
      opts:[{k:'A',en:"It restricts tariffs",vi:"Nó hạn chế thuế quan"},{k:'B',en:"It ensures fair competition and market protection",vi:"Nó đảm bảo cạnh tranh công bằng và bảo vệ thị trường"},{k:'C',en:"It allows countries to bypass patent laws",vi:"Nó cho phép các nước bỏ qua luật sáng chế"},{k:'D',en:"It removes barriers to all product sales",vi:"Nó loại bỏ rào cản cho tất cả hàng hóa"}],
      ans:'B', exp:`IPR trong thương mại quốc tế giúp <strong>đảm bảo cạnh tranh công bằng</strong> — ngăn chặn hàng giả, bảo vệ thương hiệu và công nghệ khi kinh doanh xuyên biên giới.` },

    { en:"When is overlapping protection most advantageous?",
      vi:"Khi nào thì việc bảo hộ chồng lấn mang lại lợi thế lớn nhất?",
      opts:[{k:'A',en:"When a product is cheap",vi:"Khi một sản phẩm có giá rẻ"},{k:'B',en:"When a product embodies multiple intellectual assets, like design and technology",vi:"Khi một sản phẩm chứa đựng nhiều tài sản trí tuệ, chẳng hạn như thiết kế và công nghệ"},{k:'C',en:"When a product is digital only",vi:"Khi một sản phẩm chỉ có dạng kỹ thuật số"},{k:'D',en:"When it is a simple idea",vi:"Khi nó là một ý tưởng đơn giản"}],
      ans:'B', exp:`Bảo hộ chồng lấn phát huy sức mạnh tối đa cho các sản phẩm công nghệ cao — hình dáng được bảo vệ bởi <strong>Design Right</strong>, vi mạch bởi <strong>Patent</strong>, phần mềm bởi <strong>Copyright</strong>.` },
  ],

  // ── NHÃN HIỆU & GET-UP ──────────────────────────────────────
  tm: [
    { en:"Which of the following would likely NOT result in trade mark infringement?",
      vi:"Điều nào sau đây KHÔNG dẫn đến vi phạm nhãn hiệu?",
      opts:[{k:'A',en:"Direct copying",vi:"Sao chép trực tiếp"},{k:'B',en:"Different industries with no consumer confusion",vi:"Ngành khác nhau, người dùng không bị nhầm lẫn"},{k:'C',en:"Confusingly similar logo",vi:"Logo gây nhầm lẫn"},{k:'D',en:"Unauthorized use in ads",vi:"Sử dụng trái phép trong quảng cáo"}],
      ans:'B', exp:`Vi phạm nhãn hiệu cần có <strong>nguy cơ gây nhầm lẫn cho người tiêu dùng</strong>. Nếu hai công ty ở ngành hoàn toàn khác và không ai bị nhầm lẫn thì không có vi phạm.` },

    { en:"Which is NOT one of the three elements required for passing-off?",
      vi:"Điều nào KHÔNG phải là 1 trong 3 yếu tố bắt buộc của 'passing-off'?",
      opts:[{k:'A',en:"Reputation",vi:"Danh tiếng"},{k:'B',en:"Misrepresentation",vi:"Sự gian dối/gây nhầm lẫn"},{k:'C',en:"Patentability",vi:"Khả năng được cấp bằng sáng chế"},{k:'D',en:"Damage",vi:"Thiệt hại"}],
      ans:'C', exp:`Ba yếu tố của passing-off: <strong>Reputation</strong>, <strong>Misrepresentation</strong>, <strong>Damage</strong>. Patentability thuộc luật sáng chế, không liên quan.` },

    { en:"What is the purpose of the legal concept of passing-off?",
      vi:"Mục đích của khái niệm pháp lý 'passing-off' là gì?",
      opts:[{k:'A',en:"To allow free competition",vi:"Để cho phép cạnh tranh tự do"},{k:'B',en:"To prevent businesses from misrepresenting their goods as another's",vi:"Để ngăn chặn doanh nghiệp xuyên tạc hàng hóa của họ là của người khác"},{k:'C',en:"To register a trade mark",vi:"Để đăng ký nhãn hiệu"},{k:'D',en:"To stop copyright infringement",vi:"Để ngăn vi phạm bản quyền"}],
      ans:'B', exp:`Mục đích cốt lõi của passing-off là <strong>bảo vệ người tiêu dùng và doanh nghiệp chân chính</strong> khỏi hành vi treo đầu dê bán thịt chó — cố tình làm khách hàng mua nhầm.` },

    { en:"Which of the following is a non-traditional trade mark?",
      vi:"Điều nào sau đây là nhãn hiệu phi truyền thống?",
      opts:[{k:'A',en:"Product weight",vi:"Trọng lượng sản phẩm"},{k:'B',en:"Sound or smell",vi:"Âm thanh hoặc mùi hương"},{k:'C',en:"Barcode",vi:"Mã vạch"},{k:'D',en:"Business license",vi:"Giấy phép kinh doanh"}],
      ans:'B', exp:`<strong>Nhãn hiệu phi truyền thống</strong> bao gồm âm thanh (như nhạc hiệu Intel), mùi hương, màu sắc đặc trưng — những yếu tố có thể phân biệt sản phẩm dù không phải logo hay chữ.` },

    { en:"What is the term 'get-up' commonly used to describe?",
      vi:"Thuật ngữ 'get-up' thường dùng để mô tả điều gì?",
      opts:[{k:'A',en:"The overall visual appearance and presentation of a product",vi:"Tổng thể diện mạo trực quan và cách trình bày sản phẩm"},{k:'B',en:"Business model",vi:"Mô hình kinh doanh"},{k:'C',en:"Trade mark certificates",vi:"Chứng nhận nhãn hiệu"},{k:'D',en:"Financial structure",vi:"Cơ cấu tài chính"}],
      ans:'A', exp:`<strong>Get-up</strong> bao gồm toàn bộ "vẻ bề ngoài" đặc trưng của sản phẩm — màu sắc bao bì, hình dáng chai lọ, font chữ — có thể được bảo vệ qua luật passing-off dù không đăng ký nhãn hiệu.` },

    { en:"What is the main difference between trade mark and get-up protection?",
      vi:"Sự khác biệt chính giữa bảo hộ nhãn hiệu và get-up là gì?",
      opts:[{k:'A',en:"Functionality scope",vi:"Phạm vi chức năng"},{k:'B',en:"Duration",vi:"Thời hạn"},{k:'C',en:"Get-up does not require registration",vi:"Get-up không yêu cầu đăng ký"},{k:'D',en:"Country of origin",vi:"Quốc gia xuất xứ"}],
      ans:'C', exp:`<strong>Nhãn hiệu</strong> cần đăng ký với nhà nước. <strong>Get-up</strong> tự động phát sinh nhờ sử dụng thực tế và sự công nhận của khách hàng, hoàn toàn không cần thủ tục đăng ký.` },

    { en:"Why are non-traditional marks (e.g., smell or color) difficult to register?",
      vi:"Tại sao nhãn hiệu phi truyền thống (mùi, màu) khó đăng ký?",
      opts:[{k:'A',en:"They are offensive",vi:"Chúng gây khó chịu"},{k:'B',en:"They are difficult to represent graphically and prove distinctiveness",vi:"Khó biểu diễn bằng đồ họa và chứng minh sự khác biệt"},{k:'C',en:"They're expensive to file",vi:"Tốn kém khi nộp đơn"},{k:'D',en:"They don't last long",vi:"Không tồn tại lâu"}],
      ans:'B', exp:`Cơ quan cấp nhãn hiệu yêu cầu bản mô tả rõ ràng. Việc vẽ một "mùi hương" trên giấy là điều không tưởng. Ngoài ra rất khó chứng minh một màu đơn thuần có đủ <strong>tính phân biệt</strong> trong tâm trí người tiêu dùng.` },

    { en:"When is passing-off unlikely to succeed?",
      vi:"Khi nào kiện passing-off ít có khả năng thành công?",
      opts:[{k:'A',en:"If there is no confusion between the businesses",vi:"Nếu không có sự nhầm lẫn giữa hai doanh nghiệp"},{k:'B',en:"If the brands look different",vi:"Nếu thương hiệu trông khác nhau"},{k:'C',en:"If colors match",vi:"Nếu màu sắc giống nhau"},{k:'D',en:"If slogans are similar",vi:"Nếu khẩu hiệu tương tự"}],
      ans:'A', exp:`Cốt lõi của passing-off là <strong>nguy cơ nhầm lẫn (confusion)</strong>. Nếu không có khách hàng nào bị lú lẫn giữa hai doanh nghiệp, vụ kiện sẽ thất bại.` },

    { en:"What does 'goodwill' mean in trade mark law?",
      vi:"'Goodwill' có nghĩa gì trong luật nhãn hiệu?",
      opts:[{k:'A',en:"Product quantity",vi:"Số lượng sản phẩm"},{k:'B',en:"Customer loyalty and brand reputation",vi:"Lòng trung thành của khách hàng và uy tín thương hiệu"},{k:'C',en:"Trademark length",vi:"Chiều dài của nhãn hiệu"},{k:'D',en:"Employee reviews",vi:"Đánh giá của nhân viên"}],
      ans:'B', exp:`<strong>Goodwill</strong> là tài sản vô hình — mức độ tin tưởng và trung thành mà khách hàng dành cho thương hiệu. Đây là nền móng của vụ kiện passing-off.` },

    { en:"Consumer confusion may occur even when:",
      vi:"Sự nhầm lẫn của người tiêu dùng có thể xảy ra ngay cả khi:",
      opts:[{k:'A',en:"No product is sold",vi:"Không có sản phẩm nào được bán"},{k:'B',en:"Only a part of the get-up is copied",vi:"Chỉ một phần get-up bị sao chép"},{k:'C',en:"The brand is unique",vi:"Thương hiệu là độc nhất"},{k:'D',en:"The packaging color differs",vi:"Màu sắc bao bì khác nhau"}],
      ans:'B', exp:`Ngay cả khi <strong>chỉ sao chép một phần</strong> đặc trưng (hình dạng chai, màu sắc đặc trưng), người tiêu dùng vẫn có thể bị nhầm lẫn — và điều đó đủ để kiện passing-off.` },

    { en:"What is the legal standard for proving 'likelihood of confusion' in trademarks?",
      vi:"Tiêu chuẩn pháp lý để chứng minh 'khả năng gây nhầm lẫn' trong nhãn hiệu là gì?",
      opts:[{k:'A',en:"Consumers must actually be confused",vi:"Người tiêu dùng phải thực sự bị nhầm lẫn"},{k:'B',en:"It is enough to show that an ordinary consumer is likely to be confused",vi:"Chỉ cần chứng minh rằng một người tiêu dùng bình thường có khả năng bị nhầm lẫn là đủ"},{k:'C',en:"The infringer must admit to copying",vi:"Người vi phạm phải thừa nhận sao chép"},{k:'D',en:"Both products must be identical",vi:"Cả hai sản phẩm phải giống hệt nhau"}],
      ans:'B', exp:`Pháp luật không yêu cầu phải tìm ra khách hàng <em>thực sự</em> mua nhầm. Chỉ cần chứng minh <strong>khả năng cao</strong> một người tiêu dùng bình thường sẽ bị nhầm lẫn là đủ để thắng kiện.` },

    { en:"What does 'reputation' mean in a passing-off case?",
      vi:"'Danh tiếng' có ý nghĩa gì trong vụ kiện passing-off?",
      opts:[{k:'A',en:"The business is well-known globally",vi:"Doanh nghiệp nổi tiếng toàn cầu"},{k:'B',en:"The business has a specific level of goodwill among consumers in a certain territory",vi:"Doanh nghiệp có mức độ goodwill nhất định đối với người tiêu dùng trong một khu vực"},{k:'C',en:"The owner is a celebrity",vi:"Chủ sở hữu là người nổi tiếng"},{k:'D',en:"The business has many followers on Instagram",vi:"Doanh nghiệp có nhiều người theo dõi trên Instagram"}],
      ans:'B', exp:`Không cần nổi tiếng khắp thế giới. Chỉ cần ở <strong>khu vực bạn đang kinh doanh</strong>, khách hàng nhận ra và tin tưởng thương hiệu của bạn, là đủ điều kiện kiện kẻ mạo danh.` },
  ],

  // ── BẢN QUYỀN ───────────────────────────────────────────────
  cr: [
    { en:"How long does copyright protection generally last under the Berne Convention?",
      vi:"Thời hạn bảo hộ bản quyền thường kéo dài bao lâu theo Công ước Berne?",
      opts:[{k:'A',en:"10 years from publication",vi:"10 năm kể từ khi xuất bản"},{k:'B',en:"20 years from application",vi:"20 năm kể từ khi nộp đơn"},{k:'C',en:"The life of the author plus 50 years",vi:"Suốt cuộc đời tác giả cộng thêm 50 năm"},{k:'D',en:"Forever",vi:"Mãi mãi"}],
      ans:'C', exp:`Theo <strong>Công ước Berne</strong>, bản quyền tồn tại trong suốt cuộc đời tác giả và kéo dài thêm ít nhất <strong>50 năm</strong> sau khi tác giả qua đời (nhiều quốc gia quy định 70 năm).` },

    { en:"What is a prerequisite for copyright protection?",
      vi:"Điều kiện tiên quyết để được bảo hộ bản quyền là gì?",
      opts:[{k:'A',en:"The work must be registered with the government",vi:"Tác phẩm phải được đăng ký với chính phủ"},{k:'B',en:"The work must be fixed in a tangible medium of expression",vi:"Tác phẩm phải được định hình trong một phương tiện biểu đạt hữu hình"},{k:'C',en:"The work must be profitable",vi:"Tác phẩm phải sinh lời"},{k:'D',en:"The work must be translated into English",vi:"Tác phẩm phải được dịch sang tiếng Anh"}],
      ans:'B', exp:`Bản quyền phát sinh tự động không cần đăng ký, nhưng ý tưởng phải được <strong>"định hình"</strong> (ghi lại, viết ra, vẽ ra, quay lại...) trên một vật mang tin cụ thể.` },

    { en:"What is the main purpose of the 'fair dealing' exception in copyright law?",
      vi:"Mục đích chính của ngoại lệ 'fair dealing' trong luật bản quyền là gì?",
      opts:[{k:'A',en:"To allow unlimited copying for anyone",vi:"Để cho phép bất kỳ ai sao chép không giới hạn"},{k:'B',en:"To allow limited use of copyrighted material without permission for purposes such as research, criticism, or review",vi:"Để cho phép sử dụng giới hạn tài liệu có bản quyền mà không cần xin phép cho nghiên cứu, phê bình hoặc đánh giá"},{k:'C',en:"To permit the selling of pirated goods",vi:"Để cho phép bán hàng lậu"},{k:'D',en:"To let companies steal ideas",vi:"Để cho các công ty ăn cắp ý tưởng"}],
      ans:'B', exp:`<strong>Fair dealing</strong> là điều khoản linh hoạt cho phép công chúng sử dụng một phần nhỏ tác phẩm có bản quyền để phục vụ giáo dục, nghiên cứu hoặc làm tin tức mà không bị coi là vi phạm.` },

    { en:"What is secondary infringement?",
      vi:"Vi phạm thứ cấp là gì?",
      opts:[{k:'A',en:"Making your own copy",vi:"Tự tạo bản sao"},{k:'B',en:"Dealing with unauthorized copies like distributing or selling them",vi:"Xử lý các bản sao trái phép như phân phối hoặc bán chúng"},{k:'C',en:"Writing about a copyrighted movie",vi:"Viết về bộ phim có bản quyền"},{k:'D',en:"Posting your work online",vi:"Đăng tác phẩm của bạn lên mạng"}],
      ans:'B', exp:`<strong>Vi phạm thứ cấp</strong> không phải là trực tiếp sao chép mà là xử lý các bản sao trái phép — <strong>phân phối, bán hoặc nhập khẩu hàng lậu</strong>. Khác với vi phạm sơ cấp là trực tiếp tạo ra bản sao.` },

    { en:"What does the fair use doctrine provide?",
      vi:"Học thuyết fair use cung cấp điều gì?",
      opts:[{k:'A',en:"Absolute protection for corporations",vi:"Bảo vệ tuyệt đối cho doanh nghiệp"},{k:'B',en:"A way to bypass copyright",vi:"Cách để bỏ qua bản quyền"},{k:'C',en:"Flexibility in using copyrighted works",vi:"Tính linh hoạt trong việc sử dụng tác phẩm có bản quyền"},{k:'D',en:"Unrestricted commercial use",vi:"Sử dụng thương mại không giới hạn"}],
      ans:'C', exp:`Fair use cho phép <strong>sử dụng linh hoạt</strong> tác phẩm có bản quyền trong những trường hợp như: bình luận, giảng dạy, tin tức, nghiên cứu — nhưng phải trong giới hạn hợp lý.` },

    { en:"What condition is most critical in determining whether parody is fair dealing?",
      vi:"Điều kiện nào quan trọng nhất để xác định parody có phải là fair dealing không?",
      opts:[{k:'A',en:"Author permission",vi:"Được tác giả cho phép"},{k:'B',en:"It does not substitute the original work's market",vi:"Nó không thay thế thị trường của tác phẩm gốc"},{k:'C',en:"It's uploaded to YouTube",vi:"Nó được tải lên YouTube"},{k:'D',en:"It uses music only",vi:"Nó chỉ sử dụng âm nhạc"}],
      ans:'B', exp:`Parody được bảo vệ khi nó <strong>không tranh giành khách hàng của tác phẩm gốc</strong> — người ta xem bản nhại để cười, nhưng vẫn có nhu cầu mua/xem bản gốc.` },

    { en:"What types of works can be used under fair dealing for review?",
      vi:"Loại tác phẩm nào có thể sử dụng theo fair dealing cho mục đích review?",
      opts:[{k:'A',en:"Only news",vi:"Chỉ tin tức"},{k:'B',en:"Literary, artistic, and media works",vi:"Tác phẩm văn học, nghệ thuật và truyền thông"},{k:'C',en:"Only textbooks",vi:"Chỉ sách giáo khoa"},{k:'D',en:"Only registered works",vi:"Chỉ tác phẩm đã đăng ký"}],
      ans:'B', exp:`Fair dealing cho mục đích review áp dụng với <strong>tác phẩm văn học, nghệ thuật, và truyền thông</strong> — bao gồm sách, phim, âm nhạc, tranh nghệ thuật.` },

    { en:"What condition must be met for fair dealing in research?",
      vi:"Điều kiện nào phải được đáp ứng để sử dụng hợp lý trong nghiên cứu?",
      opts:[{k:'A',en:"Author must be credited",vi:"Phải ghi nhận tác giả"},{k:'B',en:"Work must be printed",vi:"Tác phẩm phải được in"},{k:'C',en:"Use must be fair and reasonable",vi:"Việc sử dụng phải công bằng và hợp lý"},{k:'D',en:"Work must be older than 10 years",vi:"Tác phẩm phải cũ hơn 10 năm"}],
      ans:'C', exp:`<strong>Fair dealing</strong> trong nghiên cứu: chỉ dùng phần cần thiết, không thay thế việc mua tác phẩm gốc, và phục vụ mục đích nghiên cứu thực sự.` },

    { en:"What condition is required for joint owners to license their work?",
      vi:"Điều kiện nào cần thiết để đồng sở hữu cấp phép tác phẩm?",
      opts:[{k:'A',en:"Any one author may license it",vi:"Bất kỳ tác giả nào cũng có thể cấp phép"},{k:'B',en:"The publisher decides",vi:"Nhà xuất bản quyết định"},{k:'C',en:"Mutual consent of all joint owners",vi:"Sự đồng ý của tất cả đồng sở hữu"},{k:'D',en:"Fair use is automatically applied",vi:"Fair use tự động áp dụng"}],
      ans:'C', exp:`Khi tác phẩm thuộc nhiều người, <strong>tất cả chủ sở hữu phải đồng ý</strong> mới có thể cấp phép cho bên thứ ba — không ai được tự ý quyết định vượt mặt những người còn lại.` },

    { en:"Which of the following is a key distinction between moral and economic rights?",
      vi:"Điểm khác biệt chính giữa quyền tinh thần và quyền kinh tế là gì?",
      opts:[{k:'A',en:"Moral rights are non-transferable; economic rights can be assigned",vi:"Quyền tinh thần không thể chuyển nhượng; quyền kinh tế có thể chuyển nhượng"},{k:'B',en:"Both must be registered",vi:"Cả hai đều phải đăng ký"},{k:'C',en:"Economic rights are waived by default",vi:"Quyền kinh tế được từ bỏ mặc định"},{k:'D',en:"Only moral rights apply to software",vi:"Chỉ quyền tinh thần áp dụng cho phần mềm"}],
      ans:'A', exp:`<strong>Quyền tinh thần</strong> gắn chặt với tác giả, không thể bán hay chuyển nhượng. <strong>Quyền kinh tế</strong> là tài sản có thể mua bán, cấp phép hoặc chuyển giao cho người khác.` },

    { en:"What happens to copyright after the term expires?",
      vi:"Điều gì xảy ra với bản quyền sau khi hết thời hạn?",
      opts:[{k:'A',en:"It enters the public domain",vi:"Nó đi vào phạm vi công cộng"},{k:'B',en:"The government takes ownership",vi:"Chính phủ giành quyền sở hữu"},{k:'C',en:"It is renewed automatically",vi:"Nó tự động được gia hạn"},{k:'D',en:"It transfers to the publisher",vi:"Nó được chuyển giao cho nhà xuất bản"}],
      ans:'A', exp:`Khi hết thời hạn bảo hộ, tác phẩm trở thành <strong>tài sản chung của nhân loại (public domain)</strong>. Bất kỳ ai cũng có thể sử dụng, sao chép hoặc kinh doanh mà không sợ bị kiện.` },

    { en:"Which argument best supports stronger protection for computer-generated works?",
      vi:"Lập luận nào ủng hộ bảo vệ mạnh hơn cho tác phẩm do máy tính tạo ra?",
      opts:[{k:'A',en:"Computers should own property",vi:"Máy tính nên được sở hữu tài sản"},{k:'B',en:"They are increasingly indistinguishable from human-authored content",vi:"Chúng ngày càng không thể phân biệt với nội dung do con người tạo"},{k:'C',en:"They must remain public domain",vi:"Chúng phải thuộc miền công cộng"},{k:'D',en:"Human creators lose value",vi:"Người sáng tạo con người mất giá trị"}],
      ans:'B', exp:`Khi <strong>AI tạo ra tác phẩm không thể phân biệt với tác phẩm của con người</strong>, việc thiếu bảo hộ sẽ tạo ra bất công cho những người đầu tư xây dựng và lập trình hệ thống AI đó.` },

    { en:"What problem may arise from inconsistent copyright terms across countries?",
      vi:"Vấn đề gì có thể phát sinh từ sự không nhất quán về thời hạn bản quyền giữa các quốc gia?",
      opts:[{k:'A',en:"More public access",vi:"Tiếp cận công khai nhiều hơn"},{k:'B',en:"Legal uncertainty in international licensing and enforcement",vi:"Sự không chắc chắn pháp lý trong cấp phép và thực thi quốc tế"},{k:'C',en:"Easier registration",vi:"Đăng ký dễ hơn"},{k:'D',en:"Harmonized royalty collection",vi:"Thu tiền bản quyền được hài hòa hóa"}],
      ans:'B', exp:`Sự chênh lệch luật pháp tạo ra <strong>sự không chắc chắn pháp lý</strong> — cùng một tác phẩm có thể hết hạn ở nước này nhưng vẫn còn hiệu lực ở nước khác, khiến việc cấp phép xuyên biên giới cực kỳ rối rắm.` },
  ],

  // ── QUYỀN THIẾT KẾ ──────────────────────────────────────────
  dr: [
    { en:"Which of the following is most likely covered by design right?",
      vi:"Điều nào sau đây nhiều khả năng được bảo vệ bởi design right?",
      opts:[{k:'A',en:"A graphic user interface",vi:"Giao diện người dùng đồ họa"},{k:'B',en:"The shape of a chair",vi:"Hình dạng của chiếc ghế"},{k:'C',en:"A software license",vi:"Giấy phép phần mềm"},{k:'D',en:"A company slogan",vi:"Khẩu hiệu công ty"}],
      ans:'B', exp:`<strong>Design right</strong> bảo vệ hình dạng và cấu hình vật lý của sản phẩm — như hình dạng chiếc ghế. GUI bảo vệ bởi bản quyền, slogan bởi nhãn hiệu.` },

    { en:"Which of the following is considered a legal remedy for infringement?",
      vi:"Điều nào sau đây được coi là biện pháp khắc phục pháp lý cho vi phạm?",
      opts:[{k:'A',en:"Redesign suggestions",vi:"Gợi ý thiết kế lại"},{k:'B',en:"Registration of new design",vi:"Đăng ký thiết kế mới"},{k:'C',en:"Injunction and damages",vi:"Lệnh cấm và bồi thường thiệt hại"},{k:'D',en:"Transfer of license",vi:"Chuyển nhượng giấy phép"}],
      ans:'C', exp:`Hai biện pháp phổ biến nhất: <strong>Injunction</strong> (lệnh tòa án buộc dừng vi phạm) và <strong>Damages</strong> (bồi thường thiệt hại tài chính).` },

    { en:"How must a design right assignment be made to be enforceable?",
      vi:"Chuyển nhượng design right phải được thực hiện như thế nào để có hiệu lực pháp lý?",
      opts:[{k:'A',en:"Orally",vi:"Bằng lời nói"},{k:'B',en:"In writing",vi:"Bằng văn bản"},{k:'C',en:"On social media",vi:"Trên mạng xã hội"},{k:'D',en:"Through invoice only",vi:"Chỉ qua hóa đơn"}],
      ans:'B', exp:`Chuyển nhượng design right <strong>phải bằng văn bản</strong> và có chữ ký để có hiệu lực pháp lý. Thỏa thuận miệng không được tòa án công nhận.` },

    { en:"How often must a registered design be renewed?",
      vi:"Thiết kế đã đăng ký phải được gia hạn bao lâu một lần?",
      opts:[{k:'A',en:"Every year",vi:"Mỗi năm"},{k:'B',en:"Every 5 years",vi:"Mỗi 5 năm"},{k:'C',en:"Once every 10 years",vi:"10 năm một lần"},{k:'D',en:"Monthly",vi:"Hàng tháng"}],
      ans:'B', exp:`Tại UK, <strong>registered design</strong> cần được gia hạn mỗi <strong>5 năm</strong> một lần, với thời hạn bảo hộ tối đa là 25 năm (5 lần gia hạn).` },

    { en:"What determines ownership in commissioned design work?",
      vi:"Điều gì quyết định quyền sở hữu trong công việc thiết kế được thuê?",
      opts:[{k:'A',en:"Verbal agreement",vi:"Thỏa thuận miệng"},{k:'B',en:"Designer's reputation",vi:"Danh tiếng của nhà thiết kế"},{k:'C',en:"Contractual terms",vi:"Điều khoản hợp đồng"},{k:'D',en:"Trademark registration",vi:"Đăng ký nhãn hiệu"}],
      ans:'C', exp:`Khi thiết kế theo đặt hàng, <strong>điều khoản hợp đồng</strong> quyết định ai sở hữu. Nếu không có hợp đồng rõ ràng, theo luật UK mặc định người thuê thường sở hữu.` },

    { en:"What does novelty mean in design registration?",
      vi:"'Novelty' (tính mới) có nghĩa gì trong đăng ký thiết kế?",
      opts:[{k:'A',en:"The design is old but reused",vi:"Thiết kế cũ nhưng được tái sử dụng"},{k:'B',en:"The design is new and not previously disclosed",vi:"Thiết kế mới và chưa từng được công bố trước đó"},{k:'C',en:"The design has no color",vi:"Thiết kế không có màu sắc"},{k:'D',en:"The design has prior use",vi:"Thiết kế đã được sử dụng trước"}],
      ans:'B', exp:`<strong>Novelty (tính mới)</strong>: tính đến ngày nộp hồ sơ, thiết kế đó chưa từng xuất hiện, chưa từng được bày bán hay đăng lên mạng ở bất cứ đâu.` },

    { en:"What is one limitation of relying solely on design right?",
      vi:"Một hạn chế của việc chỉ dựa vào design right là gì?",
      opts:[{k:'A',en:"It lasts too long",vi:"Kéo dài quá lâu"},{k:'B',en:"It applies to patents",vi:"Áp dụng cho sáng chế"},{k:'C',en:"It's harder to enforce due to lack of registration",vi:"Khó thực thi hơn vì không có đăng ký"},{k:'D',en:"It must be renewed monthly",vi:"Phải gia hạn hàng tháng"}],
      ans:'C', exp:`Design right không đăng ký <strong>khó thực thi</strong> — không có hồ sơ công khai xác nhận ngày tạo ra và quyền sở hữu. Khi tranh chấp, người giữ bản gốc phải tự chứng minh quyền của mình.` },

    { en:"Which strategy increases a design's overall legal strength?",
      vi:"Chiến lược nào tăng sức mạnh pháp lý tổng thể của một thiết kế?",
      opts:[{k:'A',en:"Uploading it to social media",vi:"Tải lên mạng xã hội"},{k:'B',en:"Waiting for someone to copy it",vi:"Chờ ai đó sao chép"},{k:'C',en:"Combining registered design, design right, and copyright",vi:"Kết hợp registered design, design right và bản quyền"},{k:'D',en:"Posting disclaimers",vi:"Đăng tuyên bố miễn trừ trách nhiệm"}],
      ans:'C', exp:`<strong>Bảo hộ chồng lấn</strong>: Registered Design (mạnh nhất, có hồ sơ) + Design Right (tự động) + Copyright (nếu có tính nghệ thuật) = lớp bảo vệ toàn diện.` },

    { en:"Under which Act was design right introduced in the UK?",
      vi:"Design right được giới thiệu tại Anh theo Đạo luật nào?",
      opts:[{k:'A',en:"Trademark Act 1994",vi:"Đạo luật Nhãn hiệu 1994"},{k:'B',en:"Copyright, Designs and Patents Act 1988",vi:"Đạo luật Bản quyền, Thiết kế và Sáng chế 1988"},{k:'C',en:"Intellectual Property Act 2003",vi:"Đạo luật Sở hữu Trí tuệ 2003"},{k:'D',en:"Design Protection Law 1999",vi:"Luật Bảo hộ Thiết kế 1999"}],
      ans:'B', exp:`<strong>Copyright, Designs and Patents Act 1988 (CDPA 1988)</strong> là đạo luật tổng hợp của Anh quy định về bản quyền, design right và sáng chế — vẫn là nền tảng pháp lý IP chính tại UK.` },

    { en:"Why might a designer choose to register their design instead of relying on design right?",
      vi:"Tại sao nhà thiết kế có thể chọn đăng ký thiết kế thay vì chỉ dựa vào design right?",
      opts:[{k:'A',en:"To avoid moral rights",vi:"Để tránh quyền tinh thần"},{k:'B',en:"To limit their protection",vi:"Để hạn chế bảo hộ"},{k:'C',en:"To gain longer and stronger protection",vi:"Để được bảo hộ lâu hơn và mạnh hơn"},{k:'D',en:"Because registration is free",vi:"Vì đăng ký miễn phí"}],
      ans:'C', exp:`<strong>Registered design</strong> bảo hộ tới 25 năm, dễ thực thi hơn (có hồ sơ công khai), và bảo vệ cả trường hợp thiết kế tương tự được tạo ra độc lập.` },

    { en:"What is a 'prior use' defense?",
      vi:"'Prior use defense' (biện hộ sử dụng trước) là gì?",
      opts:[{k:'A',en:"Using a design in future products",vi:"Sử dụng thiết kế trong sản phẩm tương lai"},{k:'B',en:"The accused was using the design before it was registered",vi:"Bị đơn đã sử dụng thiết kế trước khi nó được đăng ký"},{k:'C',en:"Refusing to register",vi:"Từ chối đăng ký"},{k:'D',en:"Blocking another's trademark",vi:"Chặn nhãn hiệu của người khác"}],
      ans:'B', exp:`Nếu bị đơn chứng minh họ đã sử dụng thiết kế <strong>trước khi nguyên đơn đăng ký</strong>, họ có thể tiếp tục sử dụng — nhưng không được mở rộng phạm vi.` },

    { en:"A company develops a unique coffee machine shape. How can they protect it most effectively?",
      vi:"Một công ty phát triển hình dáng máy pha cà phê độc đáo. Bảo vệ hiệu quả nhất bằng cách nào?",
      opts:[{k:'A',en:"With a software license",vi:"Bằng giấy phép phần mềm"},{k:'B',en:"Through both design right and registered design",vi:"Thông qua cả design right và registered design"},{k:'C',en:"Using fair dealing",vi:"Bằng cách sử dụng hợp lý"},{k:'D',en:"By publishing a manual",vi:"Bằng cách xuất bản sách hướng dẫn"}],
      ans:'B', exp:`<strong>Bảo hộ kép</strong>: Design right (tự động, ngăn sao chép trực tiếp) + Registered design (độc quyền tuyệt đối, dễ kiện tụng) = giáp pháp lý toàn diện nhất.` },

    { en:"A company imports furniture with designs similar to a UK-registered design. What might occur?",
      vi:"Một công ty nhập khẩu đồ nội thất có thiết kế tương tự thiết kế đã đăng ký tại Anh. Điều gì có thể xảy ra?",
      opts:[{k:'A',en:"The company gets tax benefits",vi:"Công ty nhận được ưu đãi thuế"},{k:'B',en:"They may face an infringement lawsuit",vi:"Họ có thể phải đối mặt với vụ kiện vi phạm"},{k:'C',en:"They can copyright it",vi:"Họ có thể đăng ký bản quyền cho nó"},{k:'D',en:"They own the design",vi:"Họ sở hữu thiết kế đó"}],
      ans:'B', exp:`Registered Design cấp độc quyền cả về <strong>nhập khẩu</strong>. Việc nhập hàng sao chép thiết kế đã bảo hộ từ nước ngoài vào Anh là vi phạm rõ ràng.` },
  ],

  // ── MẠNG XÃ HỘI ─────────────────────────────────────────────
  sm: [
    { en:"What might a former employee violate if they take over a company's account?",
      vi:"Nhân viên cũ có thể vi phạm điều gì nếu chiếm đoạt tài khoản công ty?",
      opts:[{k:'A',en:"Do not violate",vi:"Không vi phạm"},{k:'B',en:"Social policy",vi:"Chính sách xã hội"},{k:'C',en:"CFAA (unauthorized access)",vi:"CFAA (truy cập trái phép)"},{k:'D',en:"Export control",vi:"Kiểm soát xuất khẩu"}],
      ans:'C', exp:`<strong>CFAA (Computer Fraud and Abuse Act)</strong> cấm truy cập trái phép vào hệ thống máy tính. Nhân viên cũ chiếm quyền tài khoản công ty sau khi đã nghỉ là vi phạm CFAA.` },

    { en:"What should employees do with personal and professional social media accounts?",
      vi:"Nhân viên nên làm gì với tài khoản mạng xã hội cá nhân và công việc?",
      opts:[{k:'A',en:"Share all access",vi:"Chia sẻ tất cả quyền truy cập"},{k:'B',en:"Delete them",vi:"Xóa chúng đi"},{k:'C',en:"Keep them separate",vi:"Giữ chúng tách biệt"},{k:'D',en:"Merge into one",vi:"Gộp lại thành một"}],
      ans:'C', exp:`<strong>Tách biệt tài khoản cá nhân và công việc</strong> giúp tránh nhầm lẫn về quyền sở hữu, bảo vệ bí mật kinh doanh, và ngăn ngừa tranh chấp pháp lý khi nhân viên nghỉ việc.` },

    { en:"BBC revised its social media policy in:",
      vi:"BBC sửa đổi chính sách mạng xã hội vào năm:",
      opts:[{k:'A',en:"2021",vi:"2021"},{k:'B',en:"2019",vi:"2019"},{k:'C',en:"2005",vi:"2005"},{k:'D',en:"1999",vi:"1999"}],
      ans:'A', exp:`BBC sửa đổi chính sách vào <strong>năm 2021</strong>, yêu cầu nhân viên thận trọng hơn trên mạng xã hội để bảo vệ tính trung lập và uy tín của đài.` },

    { en:"Before sharing breaking news content, journalists should:",
      vi:"Trước khi chia sẻ tin tức nóng, nhà báo nên:",
      opts:[{k:'A',en:"Make it viral",vi:"Làm nó lan truyền"},{k:'B',en:"Verify it",vi:"Xác minh thông tin"},{k:'C',en:"Ask for donations",vi:"Xin quyên góp"},{k:'D',en:"Post quickly",vi:"Đăng nhanh nhất có thể"}],
      ans:'B', exp:`Nguyên tắc báo chí cơ bản: <strong>xác minh trước khi đăng</strong>. Đưa tin chưa xác minh có thể dẫn đến trách nhiệm pháp lý về thông tin sai lệch.` },

    { en:"Which news outlet discourages discussing confidential sources online?",
      vi:"Cơ quan truyền thông nào không khuyến khích thảo luận về nguồn tin bảo mật trực tuyến?",
      opts:[{k:'A',en:"CNN",vi:"CNN"},{k:'B',en:"Wall Street Journal",vi:"Wall Street Journal"},{k:'C',en:"TikTok",vi:"TikTok"},{k:'D',en:"Google",vi:"Google"}],
      ans:'B', exp:`<strong>Wall Street Journal</strong> có chính sách không khuyến khích thảo luận về nguồn tin bảo mật trên mạng xã hội để bảo vệ nguồn tin và tính độc lập báo chí.` },

    { en:"Why do legal disputes over social media continue to rise?",
      vi:"Tại sao tranh chấp pháp lý về mạng xã hội tiếp tục gia tăng?",
      opts:[{k:'A',en:"Lack of hashtags",vi:"Thiếu hashtag"},{k:'B',en:"Blurring lines between personal and professional accounts",vi:"Ranh giới mờ giữa tài khoản cá nhân và công việc"},{k:'C',en:"Declining followers",vi:"Số người theo dõi giảm"},{k:'D',en:"Faster internet",vi:"Internet nhanh hơn"}],
      ans:'B', exp:`Nguyên nhân chính: <strong>ranh giới mờ nhạt giữa tài khoản cá nhân và công việc</strong> — khi nhân viên dùng một tài khoản cho cả hai mục đích, câu hỏi về quyền sở hữu và trách nhiệm pháp lý trở nên phức tạp.` },

    { en:"Social media ownership after employment should be addressed:",
      vi:"Quyền sở hữu mạng xã hội sau khi nghỉ việc nên được giải quyết:",
      opts:[{k:'A',en:"Through word of mouth",vi:"Bằng truyền miệng"},{k:'B',en:"In employment agreements",vi:"Trong hợp đồng lao động"},{k:'C',en:"By the IT team",vi:"Bởi bộ phận IT"},{k:'D',en:"Via brand audits",vi:"Qua kiểm toán thương hiệu"}],
      ans:'B', exp:`<strong>Hợp đồng lao động</strong> là nơi phù hợp nhất để quy định rõ: tài khoản nào thuộc công ty, tài khoản nào thuộc cá nhân, và quy trình chuyển giao khi nhân viên rời đi.` },

    { en:"An employment contract should define:",
      vi:"Hợp đồng lao động nên quy định:",
      opts:[{k:'A',en:"Hashtag trends",vi:"Xu hướng hashtag"},{k:'B',en:"Who controls the account and what happens after employment ends",vi:"Ai kiểm soát tài khoản và điều gì xảy ra sau khi hợp đồng kết thúc"},{k:'C',en:"Meeting times",vi:"Thời gian họp"},{k:'D',en:"Survey questions",vi:"Câu hỏi khảo sát"}],
      ans:'B', exp:`Hợp đồng cần rõ ràng về <strong>ai sở hữu tài khoản, quy trình chuyển giao</strong> khi nhân viên rời đi — điều này ngăn ngừa tranh chấp tốn kém về sau.` },

    { en:"NPR discourages:",
      vi:"NPR không khuyến khích:",
      opts:[{k:'A',en:"Reporting from the field",vi:"Phóng sự thực địa"},{k:'B',en:"Sharing internal disagreements on social platforms",vi:"Chia sẻ bất đồng nội bộ trên mạng xã hội"},{k:'C',en:"Posting breaking news",vi:"Đăng tin tức nóng"},{k:'D',en:"Using photos",vi:"Sử dụng ảnh"}],
      ans:'B', exp:`NPR yêu cầu nhân viên <strong>không chia sẻ bất đồng nội bộ lên mạng xã hội</strong> — bảo vệ uy tín tổ chức và đảm bảo các vấn đề nội bộ được giải quyết qua kênh phù hợp.` },

    { en:"In Eagle v. Morgan, who sued whom?",
      vi:"Trong vụ án Eagle v. Morgan, ai đã kiện ai?",
      opts:[{k:'A',en:"A school vs. publisher",vi:"Một trường học kiện nhà xuất bản"},{k:'B',en:"An employee sued her employer",vi:"Một nhân viên kiện người sử dụng lao động của cô ấy"},{k:'C',en:"A brand sued Facebook",vi:"Một thương hiệu kiện Facebook"},{k:'D',en:"A designer sued Instagram",vi:"Một nhà thiết kế kiện Instagram"}],
      ans:'B', exp:`Vụ Eagle v. Morgan: Bà Eagle kiện công ty cũ vì sau khi sa thải, công ty <strong>chiếm đoạt tài khoản LinkedIn cá nhân</strong> của bà để lấy danh sách khách hàng.` },

    { en:"What did the Christou case recognize?",
      vi:"Vụ án Christou đã công nhận điều gì?",
      opts:[{k:'A',en:"Meme legality",vi:"Tính hợp pháp của meme"},{k:'B',en:"That a friends list may be a trade secret",vi:"Rằng danh sách bạn bè có thể là một bí mật thương mại"},{k:'C',en:"Right to parody",vi:"Quyền được nhại lại (parody)"},{k:'D',en:"Hashtag trademarking",vi:"Đăng ký nhãn hiệu hashtag"}],
      ans:'B', exp:`Vụ Christou v Beaties: tòa án phán quyết rằng <strong>danh sách khách hàng trên mạng xã hội của công ty</strong> có thể được coi là bí mật thương mại. Nhân viên nghỉ việc không được phép lấy danh sách này.` },

    { en:"What is a common method to resolve social media ownership disputes?",
      vi:"Phương pháp phổ biến để giải quyết tranh chấp quyền sở hữu mạng xã hội là gì?",
      opts:[{k:'A',en:"Complaining publicly",vi:"Khiếu nại công khai"},{k:'B',en:"Mediation or legal agreement",vi:"Hòa giải hoặc thỏa thuận pháp lý"},{k:'C',en:"Changing passwords",vi:"Đổi mật khẩu"},{k:'D',en:"Hiring influencers",vi:"Thuê người có ảnh hưởng"}],
      ans:'B', exp:`<strong>Hòa giải hoặc thỏa thuận pháp lý</strong> ít tốn kém hơn kiện tụng, bảo mật hơn, và thường đạt được kết quả nhanh hơn cho cả hai bên.` },

    { en:"What is one key message from this module?",
      vi:"Thông điệp chính của chủ đề mạng xã hội là gì?",
      opts:[{k:'A',en:"Social media is fun",vi:"Mạng xã hội thú vị"},{k:'B',en:"Persona ownership must be legally addressed in employment",vi:"Quyền sở hữu 'persona' phải được giải quyết pháp lý trong hợp đồng lao động"},{k:'C',en:"Followers mean fame",vi:"Số người theo dõi đồng nghĩa với danh tiếng"},{k:'D',en:"Emails must be private",vi:"Email phải là riêng tư"}],
      ans:'B', exp:`Thông điệp cốt lõi: <strong>quyền sở hữu persona và tài khoản mạng xã hội</strong> phải được quy định rõ trong hợp đồng lao động để tránh tranh chấp khi nhân viên nghỉ việc.` },

    { en:"Fake reviews are often created by:",
      vi:"Các đánh giá giả mạo thường được tạo ra bởi:",
      opts:[{k:'A',en:"Customers",vi:"Khách hàng"},{k:'B',en:"Employees or paid reviewers",vi:"Nhân viên hoặc những người đánh giá được trả tiền"},{k:'C',en:"Media agencies",vi:"Các cơ quan truyền thông"},{k:'D',en:"Government officials",vi:"Các quan chức chính phủ"}],
      ans:'B', exp:`Fake reviews thường do chính <strong>nhân viên công ty giả danh khách hàng</strong> hoặc do thuê người (paid reviewers) viết bài khen mà không tiết lộ được trả tiền.` },

    { en:"Disclosure of a material connection between the endorser and the advertiser helps prevent:",
      vi:"Việc tiết lộ mối liên hệ vật chất giữa người chứng thực và nhà quảng cáo giúp ngăn chặn:",
      opts:[{k:'A',en:"Trademark loss",vi:"Mất nhãn hiệu"},{k:'B',en:"Misleading consumers",vi:"Người tiêu dùng bị lừa dối"},{k:'C',en:"Product damage",vi:"Thiệt hại sản phẩm"},{k:'D',en:"Shipment errors",vi:"Lỗi vận chuyển"}],
      ans:'B', exp:`FTC yêu cầu tiết lộ mối quan hệ thanh toán (dùng #ad, #sponsored) để <strong>ngăn người tiêu dùng bị lừa dối</strong> nghĩ rằng đây là đánh giá trung thực thay vì quảng cáo trả tiền.` },

    { en:"Proper disclosures help brands:",
      vi:"Việc tiết lộ thông tin hợp lý giúp các thương hiệu:",
      opts:[{k:'A',en:"Sell faster",vi:"Bán hàng nhanh hơn"},{k:'B',en:"Avoid legal trouble",vi:"Tránh rắc rối pháp lý"},{k:'C',en:"Hide mistakes",vi:"Che giấu sai lầm"},{k:'D',en:"Increase packaging",vi:"Tăng cường bao bì"}],
      ans:'B', exp:`Tiết lộ rõ ràng (#ad, #sponsored) giúp thương hiệu và KOL <strong>tránh bị khởi kiện vì tội quảng cáo lừa dối</strong> theo quy định của FTC.` },

    { en:"Public voting systems in contests must be:",
      vi:"Hệ thống bình chọn công khai trong các cuộc thi phải được:",
      opts:[{k:'A',en:"Paid only",vi:"Chỉ trả phí"},{k:'B',en:"Structured to avoid pure chance",vi:"Có cấu trúc để tránh sự may rủi hoàn toàn"},{k:'C',en:"Eliminated",vi:"Loại bỏ"},{k:'D',en:"Replaced",vi:"Thay thế"}],
      ans:'B', exp:`Để tránh bị coi là cờ bạc, các thương hiệu tổ chức thi dựa trên <strong>kỹ năng</strong> và kết quả qua bình chọn — chứng minh đây là cuộc thi tài năng chứ không phải may rủi.` },

    { en:"Which newspaper recommends consistent social connections?",
      vi:"Tờ báo nào khuyến nghị duy trì kết nối xã hội nhất quán?",
      opts:[{k:'A',en:"Roanoke Times",vi:"Roanoke Times"},{k:'B',en:"The Guardian",vi:"The Guardian"},{k:'C',en:"BBC",vi:"BBC"},{k:'D',en:"Forbes",vi:"Forbes"}],
      ans:'A', exp:`<strong>Roanoke Times</strong> có chính sách khuyến nghị nhân viên duy trì kết nối xã hội nhất quán để xây dựng lòng tin và gắn kết với cộng đồng độc giả địa phương.` },

    { en:"What is a trade secret in the context of social media use?",
      vi:"Bí mật thương mại trong bối cảnh sử dụng mạng xã hội là gì?",
      opts:[{k:'A',en:"Publicly available information",vi:"Thông tin công khai"},{k:'B',en:"Sensitive company information like product launches, marketing strategies, or internal policies",vi:"Thông tin nhạy cảm của công ty như ra mắt sản phẩm, chiến lược tiếp thị, hoặc chính sách nội bộ"},{k:'C',en:"Employee personal opinions",vi:"Ý kiến cá nhân của nhân viên"},{k:'D',en:"Marketing slogans",vi:"Khẩu hiệu tiếp thị"}],
      ans:'B', exp:`<strong>Bí mật thương mại</strong>: thông tin kinh doanh có giá trị, mang lại lợi thế cạnh tranh, và đang được công ty bảo vệ cẩn mật. Tiết lộ lên MXH là vi phạm nghiêm trọng.` },

    { en:"Follower lists may be trade secrets if they:",
      vi:"Danh sách người theo dõi có thể là bí mật thương mại nếu chúng:",
      opts:[{k:'A',en:"Are used for decoration",vi:"Được dùng để trang trí"},{k:'B',en:"Offer business advantage and are not public",vi:"Mang lại lợi thế kinh doanh và không công khai"},{k:'C',en:"Are on Facebook",vi:"Ở trên Facebook"},{k:'D',en:"Come from interns",vi:"Đến từ thực tập sinh"}],
      ans:'B', exp:`Danh sách chỉ là bí mật thương mại khi: (1) <strong>tạo ra lợi thế cạnh tranh thực sự</strong>, và (2) công ty đã áp dụng biện pháp bảo mật để giữ kín nó.` },

    { en:"FTC mandates that brands must disclose:",
      vi:"FTC bắt buộc các thương hiệu phải tiết lộ:",
      opts:[{k:'A',en:"Corporate structure",vi:"Cấu trúc doanh nghiệp"},{k:'B',en:"Type of prize, number of winners, and odds of winning",vi:"Loại giải thưởng, số lượng người chiến thắng và tỷ lệ trúng thưởng"},{k:'C',en:"Customer reviews",vi:"Đánh giá của khách hàng"},{k:'D',en:"Social media plan",vi:"Kế hoạch truyền thông mạng xã hội"}],
      ans:'B', exp:`FTC yêu cầu khi tổ chức giveaway/contest phải công khai minh bạch về <strong>giải thưởng, số lượng giải và xác suất trúng giải thực tế</strong> để bảo vệ người tiêu dùng.` },
  ],

  // ── CẤP PHÉP & HỢP ĐỒNG ────────────────────────────────────
  li: [
    { en:"What is a common outcome of licensing settlements?",
      vi:"Kết quả phổ biến của giải quyết tranh chấp cấp phép là gì?",
      opts:[{k:'A',en:"Trademark registration",vi:"Đăng ký nhãn hiệu"},{k:'B',en:"Payment of royalties as compensation",vi:"Thanh toán tiền bản quyền như bồi thường"},{k:'C',en:"Creation of joint ventures",vi:"Thành lập liên doanh"},{k:'D',en:"Patent cancellation",vi:"Hủy bằng sáng chế"}],
      ans:'B', exp:`Thay vì kiện tụng kéo dài, các bên thường hòa giải ngoài tòa. Kết quả phổ biến nhất là kẻ vi phạm trả <strong>tiền bản quyền (royalties)</strong> và ký hợp đồng cấp phép chính thức.` },

    { en:"What are the two main forms of financial compensation in licensing?",
      vi:"Hai hình thức bồi thường tài chính chính trong cấp phép là gì?",
      opts:[{k:'A',en:"Rent and loan",vi:"Tiền thuê và khoản vay"},{k:'B',en:"Lump sum and royalties",vi:"Thanh toán một lần và tiền bản quyền"},{k:'C',en:"Fees and donations",vi:"Phí và quyên góp"},{k:'D',en:"Interest and bonus",vi:"Lãi suất và tiền thưởng"}],
      ans:'B', exp:`<strong>Lump sum</strong> (trả một lần khi ký) và <strong>Royalties</strong> (trả theo tỷ lệ doanh thu). Nhiều hợp đồng kết hợp cả hai hình thức.` },

    { en:"If a settlement is reached, what is often included?",
      vi:"Khi đạt được thỏa thuận dàn xếp, điều gì thường được bao gồm?",
      opts:[{k:'A',en:"Cancellation of copyright",vi:"Hủy bản quyền"},{k:'B',en:"Compensation or license terms",vi:"Bồi thường hoặc điều khoản cấp phép"},{k:'C',en:"New creation",vi:"Tạo tác phẩm mới"},{k:'D',en:"Criminal penalty",vi:"Hình phạt hình sự"}],
      ans:'B', exp:`Dàn xếp tranh chấp IP thường bao gồm: <strong>bồi thường tài chính</strong> và/hoặc <strong>điều khoản cấp phép</strong> cho phép tiếp tục sử dụng có kiểm soát.` },

    { en:"A well-structured license ensures:",
      vi:"Một giấy phép được cấu trúc tốt đảm bảo:",
      opts:[{k:'A',en:"Public access",vi:"Quyền truy cập công khai"},{k:'B',en:"Mutual benefit and long-term success",vi:"Lợi ích cho cả hai bên và thành công lâu dài"},{k:'C',en:"Lack of enforceability",vi:"Thiếu khả năng thực thi"},{k:'D',en:"Faster trademarking",vi:"Đăng ký nhãn hiệu nhanh hơn"}],
      ans:'B', exp:`Hợp đồng cấp phép tốt tạo ra mối quan hệ <strong>win-win</strong>, bảo vệ quyền lợi của cả licensor và licensee, đảm bảo hợp tác suôn sẻ và lợi nhuận lâu dài.` },

    { en:"Improvement clauses relate to:",
      vi:"Điều khoản cải tiến (improvement clauses) liên quan đến:",
      opts:[{k:'A',en:"New technology or enhancements during the license period",vi:"Công nghệ mới hoặc cải tiến trong thời gian cấp phép"},{k:'B',en:"Advertising strategy",vi:"Chiến lược quảng cáo"},{k:'C',en:"Currency conversion",vi:"Quy đổi ngoại tệ"},{k:'D',en:"Employee contracts",vi:"Hợp đồng nhân viên"}],
      ans:'A', exp:`<strong>Improvement clauses</strong> quy định điều gì xảy ra khi có cải tiến trong thời gian hợp đồng — ai sở hữu cải tiến đó và liệu cải tiến có nằm trong phạm vi cấp phép không.` },

    { en:"If an exclusive licensee sublicenses the work to others without permission, what is violated?",
      vi:"Nếu người được cấp phép độc quyền tự ý cấp phép lại mà không có phép, điều gì bị vi phạm?",
      opts:[{k:'A',en:"Fair use",vi:"Sử dụng hợp lý"},{k:'B',en:"The exclusivity clause in the licensing agreement",vi:"Điều khoản độc quyền trong hợp đồng cấp phép"},{k:'C',en:"Public performance right",vi:"Quyền biểu diễn công khai"},{k:'D',en:"Attribution right",vi:"Quyền ghi nhận"}],
      ans:'B', exp:`Quyền sublicense phải được licensor đồng ý và ghi rõ trong hợp đồng. Tự ý cấp phép lại vi phạm <strong>điều khoản độc quyền</strong>.` },

    { en:"Tax consequences in licensing can impact:",
      vi:"Hậu quả thuế trong cấp phép có thể ảnh hưởng đến:",
      opts:[{k:'A',en:"Sales performance only",vi:"Chỉ hiệu suất bán hàng"},{k:'B',en:"The net income for both parties",vi:"Thu nhập ròng của cả hai bên"},{k:'C',en:"Branding effectiveness",vi:"Hiệu quả thương hiệu"},{k:'D',en:"Use of social media",vi:"Sử dụng mạng xã hội"}],
      ans:'B', exp:`Withholding tax, VAT, thuế thu nhập từ royalties ảnh hưởng trực tiếp đến <strong>thu nhập ròng của cả licensor và licensee</strong> — cần tính toán kỹ trong đàm phán.` },

    { en:"In case of unauthorized use of the licensed technology, the licensee should:",
      vi:"Trong trường hợp công nghệ được cấp phép bị sử dụng trái phép, người được cấp phép nên:",
      opts:[{k:'A',en:"Ignore it",vi:"Bỏ qua"},{k:'B',en:"Send a newsletter",vi:"Gửi bản tin"},{k:'C',en:"Report the infringement to the licensor",vi:"Báo cáo vi phạm cho người cấp phép"},{k:'D',en:"Reduce production",vi:"Giảm sản xuất"}],
      ans:'C', exp:`Licensee thường không có quyền trực tiếp khởi kiện. Hành động đúng là <strong>báo cáo ngay cho licensor</strong> để họ có biện pháp pháp lý can thiệp kịp thời.` },

    { en:"One benefit of unregistered get-up rights is that:",
      vi:"Một lợi ích của quyền get-up không đăng ký là:",
      opts:[{k:'A',en:"They require expensive filing",vi:"Chúng yêu cầu nộp phí tốn kém"},{k:'B',en:"They arise through use without formal registration",vi:"Chúng phát sinh qua việc sử dụng mà không cần đăng ký chính thức"},{k:'C',en:"They only work with trademark",vi:"Chúng chỉ hoạt động với nhãn hiệu"},{k:'D',en:"They need to be renewed annually",vi:"Cần được gia hạn hàng năm"}],
      ans:'B', exp:`Quyền get-up <strong>phát sinh tự động</strong> khi bạn sử dụng và xây dựng danh tiếng — không cần nộp đơn, không tốn phí đăng ký.` },

    { en:"What does the Western Electric case demonstrate?",
      vi:"Vụ Western Electric chứng minh điều gì?",
      opts:[{k:'A',en:"Patent cancellation",vi:"Hủy bằng sáng chế"},{k:'B',en:"Global licensing of core technologies",vi:"Cấp phép toàn cầu cho công nghệ cốt lõi"},{k:'C',en:"Design outsourcing",vi:"Thuê ngoài thiết kế"},{k:'D',en:"Royalty-free systems",vi:"Hệ thống miễn tiền bản quyền"}],
      ans:'B', exp:`Vụ <strong>Western Electric</strong> là ví dụ kinh điển chứng minh rằng cấp phép công nghệ cốt lõi có thể trở thành nguồn doanh thu chính và thúc đẩy phát triển công nghiệp toàn cầu.` },

    { en:"In passing-off, what must damage refer to?",
      vi:"Trong passing-off, thiệt hại phải đề cập đến điều gì?",
      opts:[{k:'A',en:"Sales profit only",vi:"Chỉ lợi nhuận bán hàng"},{k:'B',en:"Loss of business reputation or sales",vi:"Mất uy tín kinh doanh hoặc doanh số bán hàng"},{k:'C',en:"Loss of color scheme",vi:"Mất cách phối màu"},{k:'D',en:"Change of supplier",vi:"Thay đổi nhà cung cấp"}],
      ans:'B', exp:`Thiệt hại trong passing-off: <strong>mất doanh thu thực tế</strong> (khách mua nhầm hàng đối thủ) hoặc <strong>tổn hại uy tín thương hiệu</strong> (khách xài đồ giả rởm rồi chửi thương hiệu gốc).` },

    { en:"When can a licensor terminate a licensing agreement?",
      vi:"Khi nào người cấp phép có thể chấm dứt thỏa thuận cấp phép?",
      opts:[{k:'A',en:"At any time without reason",vi:"Bất cứ lúc nào mà không cần lý do"},{k:'B',en:"Only if the licensee pays more",vi:"Chỉ khi người được cấp phép trả nhiều tiền hơn"},{k:'C',en:"Upon a material breach of contract by the licensee",vi:"Khi người được cấp phép vi phạm nghiêm trọng hợp đồng"},{k:'D',en:"If the licensor changes their mind",vi:"Nếu người cấp phép đổi ý"}],
      ans:'C', exp:`Licensor không được tự ý hủy kèo trừ khi licensee vi phạm các điều khoản quan trọng (<strong>material breach</strong>) — ví dụ: không trả tiền bản quyền hoặc sử dụng sai mục đích.` },

    { en:"Why is defining the scope of a license crucial?",
      vi:"Tại sao việc xác định phạm vi của một giấy phép lại quan trọng?",
      opts:[{k:'A',en:"To limit the licensor's liability",vi:"Để giới hạn trách nhiệm pháp lý của người cấp phép"},{k:'B',en:"To specify what the licensee can and cannot do with the IP",vi:"Để xác định rõ những gì người được cấp phép có thể và không thể làm với IP"},{k:'C',en:"To increase the registration fee",vi:"Để tăng phí đăng ký"},{k:'D',en:"To make the agreement public",vi:"Để làm cho thỏa thuận trở nên công khai"}],
      ans:'B', exp:`Xác định phạm vi cấp phép giúp đảm bảo licensee <strong>không lạm dụng tài sản</strong> của bạn để trục lợi vượt quá quyền hạn cho phép.` },

    { en:"What is a 'cross-license'?",
      vi:"'Cấp phép chéo' (cross-license) là gì?",
      opts:[{k:'A',en:"A license that is canceled",vi:"Một giấy phép bị hủy bỏ"},{k:'B',en:"An agreement where two parties grant each other licenses to their respective IP",vi:"Thỏa thuận trong đó hai bên cấp phép cho nhau sử dụng IP tương ứng của họ"},{k:'C',en:"A license for international use only",vi:"Giấy phép chỉ dành cho sử dụng quốc tế"},{k:'D',en:"A license that covers all types of IP",vi:"Giấy phép bao trùm tất cả các loại IP"}],
      ans:'B', exp:`Thay vì kiện tụng lẫn nhau về vi phạm sáng chế, các "ông lớn" công nghệ ký <strong>cross-license</strong> để cả hai bên được quyền sử dụng phát minh của nhau.` },

    { en:"In a licensing agreement, what does an 'indemnity' clause do?",
      vi:"Trong thỏa thuận cấp phép, điều khoản 'bồi hoàn' (indemnity) có tác dụng gì?",
      opts:[{k:'A',en:"Increases royalties",vi:"Tăng tiền bản quyền"},{k:'B',en:"Protects one party from liability if the other party breaches third-party rights",vi:"Bảo vệ một bên khỏi trách nhiệm pháp lý nếu bên kia vi phạm quyền của bên thứ ba"},{k:'C',en:"Cancels the contract",vi:"Hủy bỏ hợp đồng"},{k:'D',en:"Ensures product quality",vi:"Đảm bảo chất lượng sản phẩm"}],
      ans:'B', exp:`<strong>Indemnity clause</strong>: nếu IP tôi bán cho bạn sau này bị người thứ 3 kiện vì tôi lỡ vi phạm quyền của họ, thì TÔI sẽ chịu toàn bộ chi phí kiện tụng thay cho bạn.` },

    { en:"In licensing, what is a 'territory' clause?",
      vi:"Trong cấp phép, điều khoản 'lãnh thổ' (territory) là gì?",
      opts:[{k:'A',en:"The physical location of the server",vi:"Vị trí vật lý của máy chủ"},{k:'B',en:"The geographical area where the licensee is allowed to use the IP",vi:"Khu vực địa lý nơi người được cấp phép được phép sử dụng IP"},{k:'C',en:"The country of the licensor",vi:"Quốc gia của người cấp phép"},{k:'D',en:"The total space occupied by the product",vi:"Tổng diện tích mà sản phẩm chiếm dụng"}],
      ans:'B', exp:`Điều khoản lãnh thổ quy định <strong>giới hạn không gian địa lý</strong>. Nếu vượt ra ngoài lãnh thổ đã thỏa thuận, licensee đã vi phạm hợp đồng.` },
  ],

  // ── QUYỀN RIÊNG TƯ & DỮ LIỆU ───────────────────────────────
  pr: [
    { en:"What is a notable feature of California's privacy laws?",
      vi:"Đặc điểm đáng chú ý của luật quyền riêng tư California là gì?",
      opts:[{k:'A',en:"They apply only to companies based in California",vi:"Chỉ áp dụng cho công ty có trụ sở ở California"},{k:'B',en:"They regulate the collection and sale of personal data",vi:"Chúng điều chỉnh việc thu thập và bán dữ liệu cá nhân"},{k:'C',en:"They mandate privacy policies for all non-profit organizations",vi:"Bắt buộc tất cả tổ chức phi lợi nhuận có chính sách quyền riêng tư"},{k:'D',en:"They allow companies to bypass user consent for data collection",vi:"Cho phép công ty bỏ qua sự đồng ý của người dùng"}],
      ans:'B', exp:`<strong>CCPA (California Consumer Privacy Act)</strong> quy định chặt chẽ về thu thập, sử dụng và bán dữ liệu cá nhân, cho người dùng quyền biết và từ chối.` },

    { en:"What does GDPR require companies to do regarding data collection?",
      vi:"GDPR yêu cầu công ty làm gì về thu thập dữ liệu?",
      opts:[{k:'A',en:"Limit user data to what is necessary for business operations",vi:"Giới hạn dữ liệu người dùng chỉ ở mức cần thiết cho hoạt động kinh doanh"},{k:'B',en:"Place strict requirements on data collection and processing",vi:"Đặt ra yêu cầu nghiêm ngặt về thu thập và xử lý dữ liệu"},{k:'C',en:"Allow unlimited collection of data from users",vi:"Cho phép thu thập dữ liệu không giới hạn"},{k:'D',en:"Automatically collect data without user consent",vi:"Tự động thu thập dữ liệu mà không cần đồng ý"}],
      ans:'B', exp:`<strong>GDPR</strong> đặt ra các yêu cầu nghiêm ngặt: cần sự đồng ý rõ ràng, data minimization, right to erasure, và privacy by design.` },

    { en:"Which of the following is a principle of GDPR?",
      vi:"Nguyên tắc nào sau đây là của GDPR?",
      opts:[{k:'A',en:"Lawfulness, fairness, and transparency in data processing",vi:"Tính hợp pháp, công bằng và minh bạch trong xử lý dữ liệu"},{k:'B',en:"Data collection for any purpose without limitations",vi:"Thu thập dữ liệu cho bất kỳ mục đích nào"},{k:'C',en:"Unlimited access to user data for advertising",vi:"Truy cập không giới hạn vào dữ liệu người dùng cho quảng cáo"},{k:'D',en:"Freedom of user choice without restrictions",vi:"Tự do lựa chọn của người dùng không bị hạn chế"}],
      ans:'A', exp:`GDPR dựa trên 7 nguyên tắc, trong đó <strong>tính hợp pháp, công bằng và minh bạch</strong> là nguyên tắc đầu tiên — mọi hoạt động xử lý dữ liệu phải có cơ sở pháp lý.` },

    { en:"In 2013, COPPA expanded to include:",
      vi:"Năm 2013, COPPA mở rộng để bao gồm:",
      opts:[{k:'A',en:"School hours",vi:"Giờ học"},{k:'B',en:"TV time",vi:"Thời gian xem TV"},{k:'C',en:"IP addresses and geolocation",vi:"Địa chỉ IP và vị trí địa lý"},{k:'D',en:"Student grades",vi:"Điểm số học sinh"}],
      ans:'C', exp:`Năm 2013, COPPA mở rộng bảo vệ thêm <strong>địa chỉ IP, dữ liệu vị trí địa lý và các định danh trực tuyến</strong> của trẻ em dưới 13 tuổi.` },

    { en:"What does CFAA stand for?",
      vi:"CFAA là viết tắt của:",
      opts:[{k:'A',en:"Computer Freedom Act Authority",vi:"Cơ quan Tự do Máy tính"},{k:'B',en:"Computer Fraud and Abuse Act",vi:"Đạo luật Gian lận và Lạm dụng Máy tính"},{k:'C',en:"Cyber Facial Access Agreement",vi:"Thỏa thuận Truy cập Khuôn mặt Mạng"},{k:'D',en:"Content Filtering Audit Act",vi:"Đạo luật Kiểm toán Lọc Nội dung"}],
      ans:'B', exp:`<strong>CFAA = Computer Fraud and Abuse Act</strong> — luật liên bang Mỹ về tội phạm mạng, cấm truy cập trái phép vào hệ thống máy tính.` },

    { en:"What can violate the CFAA?",
      vi:"Điều gì có thể vi phạm CFAA?",
      opts:[{k:'A',en:"Violating a platform's terms of service",vi:"Vi phạm điều khoản dịch vụ của nền tảng"},{k:'B',en:"Posting public content on social media",vi:"Đăng nội dung công khai trên mạng xã hội"},{k:'C',en:"Sharing non-sensitive data",vi:"Chia sẻ dữ liệu không nhạy cảm"},{k:'D',en:"Allowing access to third-party applications",vi:"Cho phép truy cập vào ứng dụng bên thứ ba"}],
      ans:'A', exp:`Theo một số án lệ, <strong>vi phạm điều khoản dịch vụ (ToS)</strong> của nền tảng có thể cấu thành vi phạm CFAA — đặc biệt khi liên quan đến truy cập vượt quá quyền hạn cho phép.` },

    { en:"What privacy concern arises from government surveillance of social media?",
      vi:"Lo ngại quyền riêng tư nào phát sinh từ việc chính phủ giám sát mạng xã hội?",
      opts:[{k:'A',en:"Government overreach and violation of privacy rights",vi:"Chính phủ vượt quyền và vi phạm quyền riêng tư"},{k:'B',en:"Limitation on freedom of speech",vi:"Giới hạn tự do ngôn luận"},{k:'C',en:"Over-monitoring of advertisements",vi:"Giám sát quá mức các quảng cáo"},{k:'D',en:"Restriction of user-generated content",vi:"Hạn chế nội dung người dùng tạo ra"}],
      ans:'A', exp:`Lo ngại chính: <strong>chính phủ vượt quyền (government overreach)</strong> — giám sát quá rộng vi phạm quyền riêng tư của công dân, đặc biệt khi không có lệnh tòa.` },

    { en:"Which of the following is an example of data collection done by Big Tech companies?",
      vi:"Điều nào sau đây là ví dụ về việc thu thập dữ liệu của các công ty Big Tech?",
      opts:[{k:'A',en:"Facial recognition",vi:"Nhận diện khuôn mặt"},{k:'B',en:"Public speech monitoring",vi:"Theo dõi phát ngôn công khai"},{k:'C',en:"Copyright infringement detection",vi:"Phát hiện vi phạm bản quyền"},{k:'D',en:"Anti-terrorism measures",vi:"Biện pháp chống khủng bố"}],
      ans:'A', exp:`<strong>Nhận diện khuôn mặt</strong> là ví dụ điển hình nhất và gây tranh cãi nhất về việc Big Tech thu thập dữ liệu sinh trắc học mà thiếu sự đồng ý rõ ràng.` },

    { en:"Most users are unaware of:",
      vi:"Hầu hết người dùng không biết về:",
      opts:[{k:'A',en:"Their device model",vi:"Mẫu thiết bị của họ"},{k:'B',en:"How much data is collected about them",vi:"Bao nhiêu dữ liệu được thu thập về họ"},{k:'C',en:"Who created their apps",vi:"Ai đã tạo ra ứng dụng của họ"},{k:'D',en:"Cookie expiration",vi:"Thời hạn hết hạn của cookie"}],
      ans:'B', exp:`Khi bấm "Tôi đồng ý" vội vã, hầu hết người dùng không biết được các nền tảng đang âm thầm thu thập <strong>khối lượng dữ liệu khổng lồ</strong> đến mức nào.` },

    { en:"Why are cross-border data transfers a challenge for privacy regulation?",
      vi:"Tại sao việc chuyển dữ liệu xuyên biên giới là thách thức cho quy định quyền riêng tư?",
      opts:[{k:'A',en:"They complicate the enforcement of consistent privacy protections",vi:"Chúng gây khó khăn trong việc thực thi bảo vệ quyền riêng tư nhất quán"},{k:'B',en:"They reduce the amount of data companies can collect",vi:"Chúng giảm lượng dữ liệu công ty có thể thu thập"},{k:'C',en:"They restrict international communication",vi:"Chúng hạn chế giao tiếp quốc tế"},{k:'D',en:"They simplify user consent requirements",vi:"Chúng đơn giản hóa yêu cầu đồng ý của người dùng"}],
      ans:'A', exp:`Sự chênh lệch luật pháp giữa các nước khiến việc áp dụng một tiêu chuẩn bảo vệ nhất quán trở thành bài toán đau đầu — lý do GDPR có quy định nghiêm ngặt về <strong>chuyển dữ liệu ra ngoài EU</strong>.` },

    { en:"How does the 'Right to be Forgotten' impact search engines?",
      vi:"'Quyền được lãng quên' ảnh hưởng đến các công cụ tìm kiếm như thế nào?",
      opts:[{k:'A',en:"They must delete all history every year",vi:"Họ phải xóa toàn bộ lịch sử hàng năm"},{k:'B',en:"They may be required to remove links to personal information that is inadequate, irrelevant, or excessive",vi:"Họ có thể bị yêu cầu xóa các liên kết dẫn đến thông tin cá nhân không đầy đủ, không liên quan hoặc quá mức"},{k:'C',en:"They must charge users for data storage",vi:"Họ phải tính phí người dùng cho việc lưu trữ dữ liệu"},{k:'D',en:"They can no longer collect cookies",vi:"Họ không còn được phép thu thập cookie"}],
      ans:'B', exp:`Theo GDPR, cá nhân có quyền yêu cầu <strong>Google gỡ bỏ các đường link</strong> dẫn đến thông tin cá nhân quá khứ không còn đúng sự thật hoặc không còn giá trị công cộng.` },

    { en:"How does privacy law define personal data?",
      vi:"Luật quyền riêng tư định nghĩa dữ liệu cá nhân như thế nào?",
      opts:[{k:'A',en:"Only public information",vi:"Chỉ thông tin công khai"},{k:'B',en:"Any information relating to an identified or identifiable natural person",vi:"Bất kỳ thông tin nào liên quan đến một thể nhân đã được xác định hoặc có thể nhận dạng được"},{k:'C',en:"Only financial records",vi:"Chỉ hồ sơ tài chính"},{k:'D',en:"Only government IDs",vi:"Chỉ giấy tờ tùy thân do chính phủ cấp"}],
      ans:'B', exp:`"Dữ liệu cá nhân" rộng hơn bạn tưởng — không chỉ CCCD hay thẻ ngân hàng, mà là <strong>BẤT KỲ thông tin gì có thể dùng để xác định danh tính bạn</strong>, kể cả địa chỉ IP, cookie, dữ liệu định vị.` },

    { en:"What is the legal risk of scraping data from social media platforms?",
      vi:"Rủi ro pháp lý của việc cào dữ liệu từ các nền tảng mạng xã hội là gì?",
      opts:[{k:'A',en:"It violates the platforms' Terms of Service and could lead to CFAA claims",vi:"Nó vi phạm Điều khoản dịch vụ của nền tảng và có thể dẫn đến khiếu nại theo CFAA"},{k:'B',en:"It is always legal if the data is public",vi:"Nó luôn hợp pháp nếu dữ liệu là công khai"},{k:'C',en:"It increases the platform's traffic",vi:"Nó làm tăng lưu lượng truy cập của nền tảng"},{k:'D',en:"It improves the platform's algorithms",vi:"Nó cải thiện thuật toán của nền tảng"}],
      ans:'A', exp:`Dù dữ liệu có vẻ công khai, việc dùng robot tự động <strong>scraping</strong> bị cấm trong ToS. Tại Mỹ, nền tảng có thể dùng <strong>CFAA</strong> để kiện tội truy cập trái phép hoặc vượt quá quyền hạn.` },

    { en:"Why are strict data retention policies important under GDPR?",
      vi:"Tại sao các chính sách lưu giữ dữ liệu nghiêm ngặt lại quan trọng theo GDPR?",
      opts:[{k:'A',en:"To increase server costs",vi:"Để tăng chi phí máy chủ"},{k:'B',en:"To ensure data is not kept longer than necessary for the stated purpose",vi:"Để đảm bảo dữ liệu không bị giữ lâu hơn mức cần thiết cho mục đích đã nêu"},{k:'C',en:"To allow unlimited data storage",vi:"Để cho phép lưu trữ dữ liệu không giới hạn"},{k:'D',en:"To facilitate easy data selling",vi:"Để tạo điều kiện cho việc bán dữ liệu dễ dàng"}],
      ans:'B', exp:`Nguyên tắc <strong>"giới hạn lưu trữ"</strong> của GDPR: xóa dữ liệu cá nhân ngay khi mục đích thu thập ban đầu đã hoàn thành — giảm thiểu rủi ro rò rỉ.` },
  ],

  // ── LẬP LUẬN PHÁP LÝ & ĐẠO ĐỨC ────────────────────────────
  la: [
    { en:"What is the relationship between law and ethics when constructing a legal argument?",
      vi:"Mối quan hệ giữa luật pháp và đạo đức khi xây dựng một lập luận pháp lý là gì?",
      opts:[{k:'A',en:"Law provides the framework, while ethics guide the approach and fairness of the argument",vi:"Luật pháp cung cấp khuôn khổ, trong khi đạo đức định hướng cách tiếp cận và tính công bằng"},{k:'B',en:"Law supersedes ethics in all cases",vi:"Luật pháp vượt lên trên đạo đức trong mọi trường hợp"},{k:'C',en:"Ethics should be disregarded if the legal argument is strong",vi:"Nên bỏ qua đạo đức nếu lập luận pháp lý mạnh mẽ"},{k:'D',en:"Law and ethics are unrelated in legal arguments",vi:"Luật pháp và đạo đức không liên quan đến nhau"}],
      ans:'A', exp:`Luật pháp là nền tảng cốt lõi. Đạo đức là <strong>"la bàn"</strong> giúp luật sư diễn giải và áp dụng pháp luật một cách nhân văn, công bằng thay vì máy móc và tàn nhẫn.` },

    { en:"What is the primary purpose of constructing a legal argument in a business dispute?",
      vi:"Mục đích chính của việc xây dựng một lập luận pháp lý trong tranh chấp kinh doanh là gì?",
      opts:[{k:'A',en:"To confuse the opposing party",vi:"Để làm đối phương bối rối"},{k:'B',en:"To justify unethical behavior",vi:"Để biện minh cho hành vi phi đạo đức"},{k:'C',en:"To present a logical and well-supported position to convince others",vi:"Để trình bày một quan điểm logic và được hỗ trợ tốt nhằm thuyết phục người khác"},{k:'D',en:"To avoid legal responsibility",vi:"Để trốn tránh trách nhiệm pháp lý"}],
      ans:'C', exp:`Mục tiêu là <strong>xâu chuỗi dữ kiện thực tế và điều luật thành đường dây logic sắc bén</strong>, từ đó thuyết phục thẩm phán hoặc đối tác đồng ý với quan điểm của mình.` },

    { en:"What is the importance of clarity when constructing a legal argument?",
      vi:"Tầm quan trọng của tính rõ ràng khi xây dựng một lập luận pháp lý là gì?",
      opts:[{k:'A',en:"Clarity ensures that the argument is easily understood and persuasive, reducing ambiguity",vi:"Tính rõ ràng đảm bảo lập luận dễ hiểu và mang tính thuyết phục, giảm thiểu sự mơ hồ"},{k:'B',en:"It allows for more complex legal terms that might confuse the opponent",vi:"Nó cho phép sử dụng thuật ngữ pháp lý phức tạp hơn có thể làm đối thủ bối rối"},{k:'C',en:"It makes the argument appear less strong",vi:"Nó làm cho lập luận có vẻ kém mạnh mẽ hơn"},{k:'D',en:"It helps the opposing party find loopholes",vi:"Nó giúp đối phương tìm ra sơ hở"}],
      ans:'A', exp:`Trong nghề luật, <strong>nói mơ hồ không làm bạn nguy hiểm</strong> — chỉ làm lập luận yếu đi. Một lập luận rõ ràng giúp thẩm phán nắm bắt logic dễ dàng hơn.` },

    { en:"What is the impact of presenting an ethically questionable argument in a legal case?",
      vi:"Tác động của việc đưa ra một lập luận có vấn đề về mặt đạo đức trong vụ án pháp lý là gì?",
      opts:[{k:'A',en:"It can increase the chances of winning",vi:"Nó có thể làm tăng cơ hội chiến thắng"},{k:'B',en:"It can damage your reputation, cause legal consequences, and undermine the integrity of the case",vi:"Nó có thể làm tổn hại danh tiếng, gây ra hậu quả pháp lý, và làm suy yếu tính liêm chính của vụ án"},{k:'C',en:"It will lead to a faster resolution",vi:"Nó sẽ dẫn đến giải quyết nhanh hơn"},{k:'D',en:"It makes the argument appear more persuasive",vi:"Nó làm cho lập luận có vẻ thuyết phục hơn"}],
      ans:'B', exp:`Sử dụng bằng chứng ngụy tạo hoặc lập luận vi phạm đạo đức không chỉ <strong>làm suy yếu niềm tin của thẩm phán</strong>, mà còn có thể khiến luật sư bị tước giấy phép hành nghề.` },

    { en:"What is a challenge of enforcing moral rights online across jurisdictions?",
      vi:"Thách thức của việc thực thi quyền nhân thân trực tuyến xuyên quốc gia là gì?",
      opts:[{k:'A',en:"Lack of fair use law",vi:"Thiếu luật sử dụng hợp lý"},{k:'B',en:"Different recognition and scope of moral rights in different countries",vi:"Sự công nhận và phạm vi khác nhau của quyền nhân thân ở các quốc gia"},{k:'C',en:"Overlap with patent law",vi:"Chồng chéo với luật sáng chế"},{k:'D',en:"Ban on Creative Commons",vi:"Lệnh cấm đối với Creative Commons"}],
      ans:'B', exp:`Châu Âu bảo vệ quyền nhân thân rất mạnh nhưng Mỹ thì yếu hơn. Sự <strong>xung đột pháp lý giữa các nước</strong> khiến việc giải quyết tranh chấp trên môi trường Internet cực kỳ khó khăn.` },

    { en:"What is the primary legal challenge when government agencies request data from social media platforms?",
      vi:"Thách thức pháp lý chính khi cơ quan chính phủ yêu cầu dữ liệu từ nền tảng mạng xã hội là gì?",
      opts:[{k:'A',en:"Ensuring that the data request complies with privacy laws while balancing the need for security",vi:"Đảm bảo yêu cầu dữ liệu tuân thủ luật quyền riêng tư đồng thời cân bằng với nhu cầu an ninh"},{k:'B',en:"Protecting intellectual property rights of the social media platforms",vi:"Bảo vệ quyền sở hữu trí tuệ của nền tảng mạng xã hội"},{k:'C',en:"Making sure the social media platforms are compensated for data access",vi:"Đảm bảo nền tảng được bồi thường cho việc truy cập dữ liệu"},{k:'D',en:"Ensuring that data is shared only with law enforcement and not third parties",vi:"Đảm bảo dữ liệu chỉ được chia sẻ với lực lượng thực thi pháp luật"}],
      ans:'A', exp:`Bài toán hóc búa: vừa lấy thông tin phục vụ điều tra (<strong>an ninh</strong>), mà lại không xâm phạm quá sâu vào quyền riêng tư (<strong>privacy laws</strong>) của những người dùng vô tội.` },

    { en:"What does 'reputation' mean in a passing-off case?",
      vi:"Trong vụ kiện passing-off, 'reputation' có ý nghĩa gì?",
      opts:[{k:'A',en:"The business is well-known globally",vi:"Doanh nghiệp nổi tiếng toàn cầu"},{k:'B',en:"The business has specific goodwill among consumers in a certain territory",vi:"Doanh nghiệp có goodwill nhất định đối với người tiêu dùng trong một khu vực"},{k:'C',en:"The owner is a celebrity",vi:"Chủ sở hữu là người nổi tiếng"},{k:'D',en:"The business has many social media followers",vi:"Doanh nghiệp có nhiều người theo dõi trên mạng xã hội"}],
      ans:'B', exp:`Không cần nổi tiếng toàn cầu. Chỉ cần ở <strong>khu vực kinh doanh cụ thể</strong>, khách hàng nhận ra và tin tưởng thương hiệu của bạn là đủ điều kiện kiện passing-off.` },

    { en:"Which ethical issue arises when journalists use anonymous sources from social media?",
      vi:"Vấn đề đạo đức nào nảy sinh khi nhà báo sử dụng nguồn tin ẩn danh từ mạng xã hội?",
      opts:[{k:'A',en:"The lack of accountability and the risk of spreading unverified or false information",vi:"Sự thiếu trách nhiệm giải trình và nguy cơ lan truyền thông tin chưa được xác minh hoặc sai sự thật"},{k:'B',en:"It increases the article's word count",vi:"Nó làm tăng số lượng từ của bài báo"},{k:'C',en:"It violates the platform's terms of service",vi:"Nó vi phạm điều khoản dịch vụ của nền tảng"},{k:'D',en:"It generates more ad revenue",vi:"Nó tạo ra nhiều doanh thu quảng cáo hơn"}],
      ans:'A', exp:`Trích dẫn tài khoản ẩn danh là canh bạc lớn: <strong>không thể quy trách nhiệm cho ai nếu thông tin là bịa đặt</strong>, dễ biến tờ báo thành công cụ lan truyền tin giả.` },

    { en:"What is the risk of not having a social media policy in a company?",
      vi:"Rủi ro của việc không có chính sách mạng xã hội trong công ty là gì?",
      opts:[{k:'A',en:"Fewer followers",vi:"Ít người theo dõi hơn"},{k:'B',en:"Loss of control over messaging, potential legal liability, and brand damage",vi:"Mất kiểm soát về thông điệp, nguy cơ chịu trách nhiệm pháp lý và tổn hại thương hiệu"},{k:'C',en:"Lower ad revenue",vi:"Doanh thu quảng cáo thấp hơn"},{k:'D',en:"More customer complaints",vi:"Nhiều khiếu nại của khách hàng hơn"}],
      ans:'B', exp:`Không có chính sách rõ ràng, nhân viên có thể vô tình phát ngôn sai lệch, làm rò rỉ bí mật công ty, hoặc gây <strong>rắc rối pháp lý nghiêm trọng và sụp đổ hình ảnh thương hiệu</strong>.` },

    { en:"What is the main objective of a social media policy in a corporate environment?",
      vi:"Mục tiêu chính của chính sách mạng xã hội trong doanh nghiệp là gì?",
      opts:[{k:'A',en:"To restrict personal internet use",vi:"Để hạn chế việc sử dụng internet cá nhân"},{k:'B',en:"To provide guidelines on acceptable behavior, protect brand reputation, and manage legal risks",vi:"Để cung cấp hướng dẫn về hành vi có thể chấp nhận, bảo vệ danh tiếng thương hiệu và quản lý rủi ro pháp lý"},{k:'C',en:"To promote the company's products",vi:"Để quảng bá sản phẩm của công ty"},{k:'D',en:"To monitor employee emails",vi:"Để giám sát email của nhân viên"}],
      ans:'B', exp:`Chính sách MXH tốt <strong>vẽ ra "vùng an toàn"</strong>, chỉ dẫn nhân viên cách hành xử chuyên nghiệp, vừa bảo vệ hình ảnh thương hiệu vừa triệt tiêu các rủi ro pháp lý.` },

    { en:"What is the consequence of failing to establish an employer-employee relationship regarding a created work?",
      vi:"Hậu quả của việc không thiết lập được mối quan hệ người sử dụng lao động - nhân viên đối với tác phẩm được tạo ra là gì?",
      opts:[{k:'A',en:"The employer automatically owns it",vi:"Người sử dụng lao động tự động sở hữu nó"},{k:'B',en:"The employee may retain the copyright as an independent contractor",vi:"Người lao động có thể giữ lại bản quyền với tư cách là nhà thầu độc lập"},{k:'C',en:"The work becomes public domain",vi:"Tác phẩm trở thành tài sản công cộng"},{k:'D',en:"The government claims it",vi:"Chính phủ đòi lại nó"}],
      ans:'B', exp:`Nếu công ty thuê bạn thiết kế mà không ký hợp đồng rõ ràng (biến bạn thành "freelancer"), luật đứng về phía bạn: <strong>BẠN là tác giả và BẠN giữ bản quyền</strong>.` },

    { en:"How can businesses demonstrate transparent communication on social media?",
      vi:"Làm thế nào doanh nghiệp có thể thể hiện sự giao tiếp minh bạch trên mạng xã hội?",
      opts:[{k:'A',en:"By ignoring negative comments",vi:"Bằng cách phớt lờ các bình luận tiêu cực"},{k:'B',en:"By sharing only positive reviews",vi:"Bằng cách chỉ chia sẻ những đánh giá tích cực"},{k:'C',en:"By being open about their practices and addressing issues publicly",vi:"Bằng cách cởi mở về hoạt động và giải quyết công khai các vấn đề"},{k:'D',en:"By using automated responses for all inquiries",vi:"Bằng cách sử dụng câu trả lời tự động cho mọi thắc mắc"}],
      ans:'C', exp:`Sự minh bạch không phải là che giấu cái xấu, mà là <strong>thái độ cởi mở, trung thực, đối mặt và xử lý công khai</strong> khi gặp sự cố hay khiếu nại.` },

    { en:"Why is it ethically important to disclose AI-generated content in journalism?",
      vi:"Tại sao việc công khai nội dung do AI tạo ra lại quan trọng về mặt đạo đức trong báo chí?",
      opts:[{k:'A',en:"To show off technology",vi:"Để phô diễn công nghệ"},{k:'B',en:"To maintain transparency and prevent misleading the audience about the source of information",vi:"Để duy trì tính minh bạch và ngăn chặn việc lừa dối khán giả về nguồn thông tin"},{k:'C',en:"To reduce the need for editors",vi:"Để giảm nhu cầu về biên tập viên"},{k:'D',en:"To comply with software licenses",vi:"Để tuân thủ các giấy phép phần mềm"}],
      ans:'B', exp:`Khán giả có quyền được biết thông tin là do con người viết hay do máy tổng hợp. <strong>Minh bạch về nguồn gốc AI</strong> bảo vệ uy tín tờ báo và ngăn chặn tin giả.` },
  ],
};

// ============================================================
// TRẠNG THÁI
// ============================================================
const state = {};
Object.keys(QDB).forEach(t => {
  state[t] = { cur: 0, correct: 0, wrong: 0, answered: false };
});

// ============================================================
// TỔNG QUAN
// ============================================================
function buildOverview() {
  const grid = document.getElementById('overview-grid');
  grid.innerHTML = '';
  Object.entries(TOPICS).forEach(([id, info]) => {
    const qs   = QDB[id];
    const s    = state[id];
    const done = s.correct + s.wrong;
    const pct  = qs.length ? Math.round(done / qs.length * 100) : 0;
    const scoreText = done > 0 ? Math.round(s.correct / done * 100) + '%' : '--';
    const card = document.createElement('div');
    card.className = 'ov-card';
    card.onclick   = () => switchTab(id);
    card.innerHTML = `
      <div class="ov-icon">${info.icon}</div>
      <div class="ov-name" style="color:${info.color}">${info.name}</div>
      <div class="ov-vi">${info.vi}</div>
      <div class="ov-bar"><div class="ov-fill" style="width:${pct}%;background:${info.color}"></div></div>
      <div class="ov-stats">
        <span>${qs.length} câu hỏi</span>
        <span class="${done > 0 ? 'done' : ''}">${done > 0 ? scoreText + ' đúng' : 'Chưa làm'}</span>
      </div>`;
    grid.appendChild(card);
  });
}

// ============================================================
// CHUYỂN TAB
// ============================================================
function switchTab(id) {
  document.querySelectorAll('.topic-page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('page-' + id).classList.add('active');
  const btn = document.querySelector(`[onclick="switchTab('${id}')"]`);
  if (btn) btn.classList.add('active');
  if (id !== 'home') loadQ(id);
  else buildOverview();
  window.scrollTo(0, 0);
}

// ============================================================
// TẢI CÂU HỎI
// ============================================================
function loadQ(t) {
  const s  = state[t];
  const qs = QDB[t];
  if (s.cur >= qs.length) { showFinal(t); return; }
  s.answered = false;
  const q = qs[s.cur];

  document.getElementById('cnt-'   + t).textContent = qs.length;
  document.getElementById('sr-'    + t).textContent = qs.length - s.cur;
  document.getElementById('ptext-' + t).textContent = `Câu ${s.cur + 1} / ${qs.length}`;
  const pct = Math.round(s.cur / qs.length * 100);
  document.getElementById('ppct-'  + t).textContent = pct + '%';
  document.getElementById('pfill-' + t).style.width = pct + '%';
  document.getElementById('qnum-'  + t).textContent = `CÂU ${String(s.cur + 1).padStart(2,'0')}`;
  document.getElementById('qen-'   + t).textContent = q.en;
  document.getElementById('qvi-'   + t).textContent = q.vi;

  const optEl = document.getElementById('opts-' + t);
  optEl.innerHTML = '';
  q.opts.forEach(o => {
    const btn = document.createElement('button');
    btn.className = 'opt-btn';
    btn.setAttribute('data-key', o.k);
    btn.onclick = () => selectA(t, o.k);
    btn.innerHTML = `<div class="opt-key">${o.k}</div><div class="opt-text"><div class="opt-en">${o.en}</div><div class="opt-vi">${o.vi}</div></div>`;
    optEl.appendChild(btn);
  });

  document.getElementById('rb-' + t).className = 'result-box';
  document.getElementById('nb-' + t).classList.remove('show');

  const card = document.getElementById('card-' + t);
  card.style.animation = 'none'; card.offsetHeight;
  card.style.animation = 'cardIn 0.35s cubic-bezier(.4,0,.2,1)';
  card.style.display = '';
  document.getElementById('fin-' + t).classList.remove('show');
}

// ============================================================
// CHỌN ĐÁP ÁN
// ============================================================
function selectA(t, key) {
  const s = state[t];
  if (s.answered) return;
  s.answered = true;
  const q    = QDB[t][s.cur];
  const isOK = key === q.ans;
  if (isOK) s.correct++; else s.wrong++;

  document.getElementById('sc-' + t).textContent = s.correct;
  document.getElementById('sw-' + t).textContent = s.wrong;
  const done = s.correct + s.wrong;
  document.getElementById('score-' + t).textContent = Math.round(s.correct / done * 100) + '%';

  document.querySelectorAll(`#opts-${t} .opt-btn`).forEach(b => {
    b.disabled = true;
    const k = b.getAttribute('data-key');
    if (k === q.ans) b.classList.add('correct');
    else if (k === key && !isOK) b.classList.add('wrong');
    else b.classList.add('dimmed');
  });

  const rb  = document.getElementById('rb-'  + t);
  const rbt = document.getElementById('rbt-' + t);
  const rbe = document.getElementById('rbe-' + t);
  if (isOK) { rb.className = 'result-box rb-correct show'; rbt.textContent = 'CHÍNH XÁC'; }
  else       { rb.className = 'result-box rb-wrong show';   rbt.textContent = `SAI — Đáp án đúng là ${q.ans}`; }
  rbe.innerHTML = q.exp;

  const nb = document.getElementById('nb-' + t);
  nb.textContent = s.cur < QDB[t].length - 1 ? 'Câu tiếp theo →' : 'Xem kết quả';
  nb.classList.add('show');
}

// ============================================================
// CÂU TIẾP THEO
// ============================================================
function nextQ(t) { state[t].cur++; loadQ(t); }

// ============================================================
// MÀN HÌNH KẾT QUẢ
// ============================================================
function showFinal(t) {
  document.getElementById('card-' + t).style.display = 'none';
  const s = state[t]; const total = QDB[t].length;
  const pct = Math.round(s.correct / total * 100);
  document.getElementById('pfill-' + t).style.width = '100%';
  document.getElementById('ppct-'  + t).textContent = '100%';
  document.getElementById('fg-'    + t).textContent = pct + '%';
  document.getElementById('fsc-'   + t).textContent = s.correct;
  document.getElementById('fsw-'   + t).textContent = s.wrong;
  let msg = pct === 100 ? 'Xuất sắc! Nắm vững hoàn toàn.' : pct >= 70 ? 'Tốt! Ôn lại phần còn sai.' : 'Cần ôn lại. Hãy thử lại!';
  document.getElementById('fm-' + t).textContent = msg;
  document.getElementById('fin-' + t).classList.add('show');
  buildOverview();
}

// ============================================================
// LÀM LẠI
// ============================================================
function restartTopic(t) {
  state[t] = { cur: 0, correct: 0, wrong: 0, answered: false };
  document.getElementById('sc-'    + t).textContent = '0';
  document.getElementById('sw-'    + t).textContent = '0';
  document.getElementById('score-' + t).textContent = '-';
  document.getElementById('card-'  + t).style.display = '';
  loadQ(t);
}

// ============================================================
// KHỞI TẠO
// ============================================================
Object.keys(QDB).forEach(t => {
  const cnt = document.getElementById('cnt-' + t);
  const sr  = document.getElementById('sr-'  + t);
  if (cnt) cnt.textContent = QDB[t].length;
  if (sr)  sr.textContent  = QDB[t].length;
});
buildOverview();
