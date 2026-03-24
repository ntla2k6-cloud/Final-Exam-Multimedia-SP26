// ============================================================
// DỮ LIỆU CHỦ ĐỀ
// ============================================================
const TOPICS = {
  ip: { name:'Intellectual Property Rights', vi:'Sở Hữu Trí Tuệ',       icon:'📖', color:'#4f8ef7' },
  tm: { name:'Trade Mark & Get-Up',          vi:'Nhãn Hiệu & Thương Hiệu', icon:'®',  color:'#7c5af0' },
  cr: { name:'Copyright & Fair Dealing',     vi:'Bản Quyền & Sử Dụng Hợp Lý', icon:'©', color:'#2dd4f7' },
  dr: { name:'Design Rights',               vi:'Quyền Thiết Kế',          icon:'✏', color:'#f7c948' },
  sm: { name:'Social Media Law',            vi:'Luật Mạng Xã Hội',        icon:'📱', color:'#1fd67a' },
  li: { name:'Licensing & Agreements',      vi:'Cấp Phép & Hợp Đồng',     icon:'📄', color:'#f79348' },
  pr: { name:'Privacy & Data Protection',   vi:'Quyền Riêng Tư & Dữ Liệu', icon:'🔒', color:'#f75f5f' },
};

// ============================================================
// NGÂN HÀNG CÂU HỎI
// ============================================================
const QDB = {

  // ----------------------------------------------------------
  ip: [
    { en:"Which of the following is NOT an economic right?",
      vi:"Điều nào sau đây KHÔNG phải là quyền kinh tế?",
      opts:[{k:'A',en:"Right to copy",vi:"Quyền sao chép"},{k:'B',en:"Right to distribute",vi:"Quyền phân phối"},{k:'C',en:"Right to object to distortion",vi:"Quyền phản đối sự xuyên tạc"},{k:'D',en:"Right to perform",vi:"Quyền biểu diễn"}],
      ans:'C', exp:`<strong>Quyền tinh thần (Moral rights)</strong> như C không liên quan đến lợi nhuận — đây là quyền bảo vệ danh dự tác giả. Còn A, B, D là <strong>quyền kinh tế</strong> giúp tác giả kiếm tiền từ tác phẩm.` },

    { en:"What can help reduce ownership disputes in overlapping IP protection?",
      vi:"Điều gì giúp giảm tranh chấp quyền sở hữu khi có sự trùng lặp bảo vệ IP?",
      opts:[{k:'A',en:"Logo design",vi:"Thiết kế logo"},{k:'B',en:"Clear assignment contracts and documentation",vi:"Hợp đồng chuyển nhượng rõ ràng và tài liệu đầy đủ"},{k:'C',en:"Moral rights waiver",vi:"Từ bỏ quyền tinh thần"},{k:'D',en:"Public use agreement",vi:"Thỏa thuận sử dụng công khai"}],
      ans:'B', exp:`<strong>Hợp đồng chuyển nhượng rõ ràng</strong> ghi rõ ai sở hữu cái gì, từ đó ngăn ngừa tranh chấp về quyền sở hữu IP khi có nhiều bên cùng tham gia dự án.` },

    { en:"Which rights are concerned with how a work is treated and credited?",
      vi:"Quyền nào liên quan đến việc tác phẩm được đối xử và ghi nhận như thế nào?",
      opts:[{k:'A',en:"Moral rights",vi:"Quyền tinh thần"},{k:'B',en:"Patent rights",vi:"Quyền sáng chế"},{k:'C',en:"Distribution rights",vi:"Quyền phân phối"},{k:'D',en:"Performance rights",vi:"Quyền biểu diễn"}],
      ans:'A', exp:`<strong>Quyền tinh thần (Moral rights)</strong> quan tâm đến việc tác phẩm được xử lý và ghi nhận đúng tên tác giả — bao gồm quyền được ghi nhận tên và quyền phản đối sửa đổi làm tổn hại danh dự.` },

    { en:"Why are effective legal regimes important for IPR?",
      vi:"Tại sao các chế độ pháp lý hiệu quả quan trọng với quyền sở hữu trí tuệ?",
      opts:[{k:'A',en:"To increase registration fees",vi:"Để tăng phí đăng ký"},{k:'B',en:"To ensure creators' rights are protected",vi:"Để đảm bảo quyền của người sáng tạo được bảo vệ"},{k:'C',en:"To limit international trade",vi:"Để hạn chế thương mại quốc tế"},{k:'D',en:"To suppress user-generated content",vi:"Để kiểm soát nội dung người dùng tạo ra"}],
      ans:'B', exp:`Mục tiêu cốt lõi của hệ thống pháp luật IP là <strong>bảo vệ quyền lợi người sáng tạo</strong> — tạo động lực sáng tạo và đổi mới, đồng thời đảm bảo công bằng trên thị trường.` },

    { en:"Which of the following is NOT a requirement for patentability?",
      vi:"Điều nào sau đây KHÔNG phải là yêu cầu để được cấp bằng sáng chế?",
      opts:[{k:'A',en:"Novelty",vi:"Tính mới"},{k:'B',en:"Inventive step",vi:"Bước sáng tạo"},{k:'C',en:"Industrial applicability",vi:"Khả năng ứng dụng công nghiệp"},{k:'D',en:"Popularity",vi:"Sự nổi tiếng"}],
      ans:'D', exp:`Ba yêu cầu bắt buộc để được cấp bằng sáng chế: <strong>Tính mới (Novelty)</strong>, <strong>Bước sáng tạo (Inventive step)</strong>, và <strong>Khả năng ứng dụng công nghiệp</strong>. Sự nổi tiếng không có vai trò gì trong luật sáng chế.` },

    { en:"What can overly strict IP enforcement lead to?",
      vi:"Việc thực thi IP quá nghiêm ngặt có thể dẫn đến điều gì?",
      opts:[{k:'A',en:"Creative freedom",vi:"Tự do sáng tạo"},{k:'B',en:"Stifled innovation and reduced idea sharing",vi:"Kìm hãm đổi mới và giảm chia sẻ ý tưởng"},{k:'C',en:"Economic growth",vi:"Tăng trưởng kinh tế"},{k:'D',en:"Clear fair use guidelines",vi:"Hướng dẫn sử dụng hợp lý rõ ràng"}],
      ans:'B', exp:`Khi IP được thực thi quá cứng nhắc, nó có thể <strong>kìm hãm đổi mới</strong> vì mọi người sợ bị kiện khi sử dụng hoặc phát triển ý tưởng dựa trên ý tưởng hiện có.` },

    { en:"How does IPR affect international trade agreements?",
      vi:"Quyền sở hữu trí tuệ ảnh hưởng đến các hiệp định thương mại quốc tế như thế nào?",
      opts:[{k:'A',en:"It restricts tariffs",vi:"Nó hạn chế thuế quan"},{k:'B',en:"It ensures fair competition and market protection",vi:"Nó đảm bảo cạnh tranh công bằng và bảo vệ thị trường"},{k:'C',en:"It allows countries to bypass patent laws",vi:"Nó cho phép các nước bỏ qua luật sáng chế"},{k:'D',en:"It removes barriers to all product sales",vi:"Nó loại bỏ rào cản cho tất cả hàng hóa"}],
      ans:'B', exp:`IPR trong thương mại quốc tế giúp <strong>đảm bảo cạnh tranh công bằng</strong> — ngăn chặn hàng giả, bảo vệ thương hiệu và công nghệ khi kinh doanh xuyên biên giới.` },

    { en:"Why is moral recognition of the creator important?",
      vi:"Tại sao sự ghi nhận đạo đức của người sáng tạo lại quan trọng?",
      opts:[{k:'A',en:"To allow censorship of content",vi:"Để kiểm duyệt nội dung"},{k:'B',en:"To support free use of ideas",vi:"Để hỗ trợ sử dụng ý tưởng miễn phí"},{k:'C',en:"To protect the integrity and acknowledge the origin of work",vi:"Để bảo vệ tính toàn vẹn và ghi nhận nguồn gốc tác phẩm"},{k:'D',en:"To bypass economic rewards",vi:"Để bỏ qua phần thưởng kinh tế"}],
      ans:'C', exp:`Việc ghi nhận tên tác giả <strong>bảo vệ sự toàn vẹn của tác phẩm</strong> và đảm bảo nguồn gốc sáng tạo được tôn trọng — đây là nền tảng của quyền tinh thần (moral rights).` },

    { en:"Why is it important for creators to have exclusive rights?",
      vi:"Tại sao quyền độc quyền quan trọng với người sáng tạo?",
      opts:[{k:'A',en:"To ensure government ownership",vi:"Để đảm bảo nhà nước sở hữu"},{k:'B',en:"To prevent unauthorized use and monetize their work",vi:"Để ngăn sử dụng trái phép và kiếm tiền từ tác phẩm"},{k:'C',en:"To avoid public knowledge",vi:"Để tránh kiến thức công cộng"},{k:'D',en:"To enforce public access to ideas",vi:"Để buộc công khai ý tưởng"}],
      ans:'B', exp:`Quyền độc quyền cho phép người sáng tạo <strong>kiểm soát việc sử dụng và kiếm tiền từ tác phẩm của mình</strong> — đây là động lực chính để tiếp tục sáng tạo và đổi mới.` },

    { en:"Which international agreement aims to harmonize IP standards?",
      vi:"Hiệp định quốc tế nào nhằm hài hòa hóa tiêu chuẩn sở hữu trí tuệ?",
      opts:[{k:'A',en:"Geneva Protocol",vi:"Nghị định thư Geneva"},{k:'B',en:"TRIPS Agreement",vi:"Hiệp định TRIPS"},{k:'C',en:"Digital Media Charter",vi:"Hiến chương Truyền thông Kỹ thuật số"},{k:'D',en:"UNESCO IP Pact",vi:"Hiệp ước IP của UNESCO"}],
      ans:'B', exp:`<strong>Hiệp định TRIPS</strong> (Trade-Related Aspects of Intellectual Property Rights) được quản lý bởi WTO, là hiệp định quốc tế toàn diện nhất về tiêu chuẩn IP.` },

    { en:"Which organization enforces the TRIPS Agreement?",
      vi:"Tổ chức nào thực thi Hiệp định TRIPS?",
      opts:[{k:'A',en:"World Trade Organization (WTO)",vi:"Tổ chức Thương mại Thế giới (WTO)"},{k:'B',en:"UNESCO",vi:"UNESCO"},{k:'C',en:"International Criminal Court",vi:"Tòa án Hình sự Quốc tế"},{k:'D',en:"WIPO",vi:"WIPO"}],
      ans:'A', exp:`<strong>WTO (Tổ chức Thương mại Thế giới)</strong> là cơ quan có thẩm quyền thực thi Hiệp định TRIPS thông qua cơ chế giải quyết tranh chấp giữa các quốc gia thành viên.` },
  ],

  // ----------------------------------------------------------
  tm: [
    { en:"Which of the following would likely NOT result in trade mark infringement?",
      vi:"Điều nào sau đây KHÔNG dẫn đến vi phạm nhãn hiệu?",
      opts:[{k:'A',en:"Direct copying",vi:"Sao chép trực tiếp"},{k:'B',en:"Different industries with no consumer confusion",vi:"Ngành khác nhau, người dùng không bị nhầm lẫn"},{k:'C',en:"Confusingly similar logo",vi:"Logo gây nhầm lẫn"},{k:'D',en:"Unauthorized use in ads",vi:"Sử dụng trái phép trong quảng cáo"}],
      ans:'B', exp:`Vi phạm nhãn hiệu cần có <strong>nguy cơ gây nhầm lẫn cho người tiêu dùng</strong>. Nếu hai công ty ở ngành hoàn toàn khác và không ai bị nhầm lẫn thì không có vi phạm.` },

    { en:"Which is NOT one of the three elements required for passing-off?",
      vi:"Điều nào KHÔNG phải là 1 trong 3 yếu tố bắt buộc của 'passing-off'?",
      opts:[{k:'A',en:"Reputation",vi:"Danh tiếng"},{k:'B',en:"Misrepresentation",vi:"Sự gian dối/gây nhầm lẫn"},{k:'C',en:"Patentability",vi:"Khả năng được cấp bằng sáng chế"},{k:'D',en:"Damage",vi:"Thiệt hại"}],
      ans:'C', exp:`Ba yếu tố của passing-off: <strong>Reputation</strong> (danh tiếng), <strong>Misrepresentation</strong> (gian dối gây nhầm lẫn), <strong>Damage</strong> (thiệt hại). Patentability thuộc luật sáng chế, không liên quan.` },

    { en:"What ensures your trade mark is accepted internationally?",
      vi:"Điều gì đảm bảo nhãn hiệu được chấp nhận quốc tế?",
      opts:[{k:'A',en:"Only domestic use",vi:"Chỉ sử dụng trong nước"},{k:'B',en:"No logo",vi:"Không có logo"},{k:'C',en:"Proper international registration process",vi:"Quy trình đăng ký quốc tế đúng chuẩn"},{k:'D',en:"Filing multiple copyrights",vi:"Nộp nhiều bản quyền"}],
      ans:'C', exp:`Nhãn hiệu phải được đăng ký tại từng quốc gia hoặc thông qua hệ thống <strong>Madrid Protocol</strong> để được bảo vệ quốc tế. Không có đăng ký đúng chuẩn, nhãn hiệu không được công nhận ở nước ngoài.` },

    { en:"Which of the following is a non-traditional trade mark?",
      vi:"Điều nào sau đây là nhãn hiệu phi truyền thống?",
      opts:[{k:'A',en:"Product weight",vi:"Trọng lượng sản phẩm"},{k:'B',en:"Sound or smell",vi:"Âm thanh hoặc mùi hương"},{k:'C',en:"Barcode",vi:"Mã vạch"},{k:'D',en:"Business license",vi:"Giấy phép kinh doanh"}],
      ans:'B', exp:`<strong>Nhãn hiệu phi truyền thống</strong> bao gồm âm thanh (như nhạc hiệu Intel), mùi hương, màu sắc đặc trưng — những yếu tố có thể phân biệt sản phẩm dù không phải logo hay chữ.` },

    { en:"What is the term 'get-up' commonly used to describe?",
      vi:"Thuật ngữ 'get-up' thường dùng để mô tả điều gì?",
      opts:[{k:'A',en:"The overall visual appearance and presentation of a product",vi:"Diện mạo tổng thể và cách trình bày sản phẩm"},{k:'B',en:"Business model",vi:"Mô hình kinh doanh"},{k:'C',en:"Trade mark certificates",vi:"Chứng nhận nhãn hiệu"},{k:'D',en:"Financial structure",vi:"Cơ cấu tài chính"}],
      ans:'A', exp:`<strong>Get-up</strong> là tổng thể hình thức nhận diện của sản phẩm — bao gồm màu sắc bao bì, hình dạng, thiết kế tổng thể — dù không đăng ký nhãn hiệu vẫn có thể được bảo vệ qua luật passing-off.` },

    { en:"What is the main difference between trade mark and get-up protection?",
      vi:"Sự khác biệt chính giữa bảo hộ nhãn hiệu và get-up là gì?",
      opts:[{k:'A',en:"Functionality scope",vi:"Phạm vi chức năng"},{k:'B',en:"Duration",vi:"Thời hạn bảo hộ"},{k:'C',en:"Get-up does not require registration",vi:"Get-up không yêu cầu đăng ký"},{k:'D',en:"Country of origin",vi:"Quốc gia xuất xứ"}],
      ans:'C', exp:`Điểm khác biệt then chốt: <strong>Get-up không cần đăng ký</strong> — được bảo vệ tự động thông qua luật passing-off khi có danh tiếng trên thị trường. Nhãn hiệu cần đăng ký chính thức.` },

    { en:"Why is get-up useful for small businesses?",
      vi:"Tại sao get-up hữu ích cho doanh nghiệp nhỏ?",
      opts:[{k:'A',en:"It's only for luxury brands",vi:"Chỉ dành cho thương hiệu cao cấp"},{k:'B',en:"It protects branding even without registration",vi:"Bảo vệ thương hiệu ngay cả khi không đăng ký"},{k:'C',en:"It's used for tax credits",vi:"Dùng để giảm thuế"},{k:'D',en:"It reduces advertising costs",vi:"Giảm chi phí quảng cáo"}],
      ans:'B', exp:`Với doanh nghiệp nhỏ chưa đủ tiền đăng ký nhãn hiệu, <strong>get-up cung cấp sự bảo vệ tự động</strong> dựa trên danh tiếng thực tế đã xây dựng được trên thị trường.` },

    { en:"A new store uses a similar name and layout as a famous chain. What may result?",
      vi:"Một cửa hàng mới dùng tên và bố cục tương tự chuỗi nổi tiếng. Điều gì có thể xảy ra?",
      opts:[{k:'A',en:"Increased sales",vi:"Doanh thu tăng"},{k:'B',en:"Licensing opportunities",vi:"Cơ hội cấp phép"},{k:'C',en:"A passing-off claim",vi:"Khiếu nại passing-off"},{k:'D',en:"Tax reduction",vi:"Giảm thuế"}],
      ans:'C', exp:`Đây là ví dụ điển hình của <strong>passing-off</strong>: cửa hàng mới cố tình sao chép để người tiêu dùng nhầm với chuỗi nổi tiếng, gây thiệt hại về doanh thu và uy tín.` },

    { en:"When is passing-off unlikely to succeed?",
      vi:"Khi nào kiện passing-off ít có khả năng thành công?",
      opts:[{k:'A',en:"If there is no confusion between the businesses",vi:"Nếu không có sự nhầm lẫn giữa hai doanh nghiệp"},{k:'B',en:"If the brands look different",vi:"Nếu thương hiệu trông khác nhau"},{k:'C',en:"If colors match",vi:"Nếu màu sắc giống nhau"},{k:'D',en:"If slogans are similar",vi:"Nếu khẩu hiệu tương tự"}],
      ans:'A', exp:`Passing-off cần chứng minh <strong>nguy cơ nhầm lẫn</strong>. Nếu không có sự nhầm lẫn nào xảy ra hoặc có thể xảy ra giữa hai doanh nghiệp, khiếu nại sẽ không thành công.` },

    { en:"Which type of damage is most relevant in a passing-off case?",
      vi:"Loại thiệt hại nào liên quan nhất trong vụ kiện passing-off?",
      opts:[{k:'A',en:"Emotional distress",vi:"Đau khổ tinh thần"},{k:'B',en:"Loss of sales or harm to brand reputation",vi:"Mất doanh thu hoặc tổn hại uy tín thương hiệu"},{k:'C',en:"System crash",vi:"Hệ thống bị sập"},{k:'D',en:"Product malfunction",vi:"Sản phẩm bị lỗi"}],
      ans:'B', exp:`Trong passing-off, thiệt hại phải là <strong>mất doanh thu thực tế hoặc tổn hại uy tín thương hiệu</strong> — đây là yếu tố "Damage" cần chứng minh trong bộ ba Reputation-Misrepresentation-Damage.` },

    { en:"Consumer confusion may occur even when:",
      vi:"Sự nhầm lẫn của người tiêu dùng có thể xảy ra ngay cả khi:",
      opts:[{k:'A',en:"No product is sold",vi:"Không có sản phẩm nào được bán"},{k:'B',en:"Only a part of the get-up is copied",vi:"Chỉ một phần get-up bị sao chép"},{k:'C',en:"The brand is unique",vi:"Thương hiệu là độc nhất"},{k:'D',en:"The packaging color differs",vi:"Màu sắc bao bì khác nhau"}],
      ans:'B', exp:`Ngay cả khi <strong>chỉ sao chép một phần</strong> get-up (ví dụ: hình dạng chai, màu sắc đặc trưng), người tiêu dùng vẫn có thể bị nhầm lẫn — và điều đó đủ để kiện passing-off.` },

    { en:"Why are non-traditional marks (e.g., smell or color) difficult to register?",
      vi:"Tại sao nhãn hiệu phi truyền thống (mùi, màu) khó đăng ký?",
      opts:[{k:'A',en:"They are offensive",vi:"Chúng gây khó chịu"},{k:'B',en:"They are difficult to represent graphically and prove distinctiveness",vi:"Khó biểu diễn bằng đồ họa và chứng minh sự khác biệt"},{k:'C',en:"They're expensive to file",vi:"Tốn kém khi nộp đơn"},{k:'D',en:"They don't last long",vi:"Không tồn tại lâu"}],
      ans:'B', exp:`Nhãn hiệu phi truyền thống gặp khó khăn vì: (1) <strong>Khó thể hiện bằng hình ảnh/đồ họa</strong> trong hồ sơ đăng ký; (2) Phải chứng minh được sự phân biệt cao trong tâm trí người tiêu dùng.` },

    { en:"Why should businesses consider international registration?",
      vi:"Tại sao doanh nghiệp nên cân nhắc đăng ký nhãn hiệu quốc tế?",
      opts:[{k:'A',en:"For software licenses",vi:"Cho giấy phép phần mềm"},{k:'B',en:"If they plan to expand beyond domestic markets",vi:"Nếu họ muốn mở rộng ra ngoài thị trường trong nước"},{k:'C',en:"To comply with local tax law",vi:"Để tuân thủ luật thuế địa phương"},{k:'D',en:"For social media presence",vi:"Cho sự hiện diện trên mạng xã hội"}],
      ans:'B', exp:`Nhãn hiệu chỉ được bảo vệ tại nơi đã đăng ký. Doanh nghiệp muốn <strong>mở rộng quốc tế</strong> cần đăng ký tại từng thị trường mục tiêu hoặc dùng hệ thống Madrid để bảo vệ đồng thời nhiều nước.` },

    { en:"Why is accurate representation of the trade mark important?",
      vi:"Tại sao việc thể hiện nhãn hiệu chính xác lại quan trọng?",
      opts:[{k:'A',en:"For marketing",vi:"Cho marketing"},{k:'B',en:"To ensure clarity in protection scope",vi:"Để đảm bảo rõ ràng phạm vi bảo hộ"},{k:'C',en:"To impress customers",vi:"Để gây ấn tượng với khách hàng"},{k:'D',en:"For budgeting",vi:"Cho lập ngân sách"}],
      ans:'B', exp:`Việc mô tả nhãn hiệu chính xác trong hồ sơ đăng ký xác định <strong>phạm vi bảo hộ chính xác</strong> — bảo hộ quá rộng hay quá hẹp đều gây bất lợi khi cần thực thi quyền.` },
  ],

  // ----------------------------------------------------------
  cr: [
    { en:"What is secondary infringement?",
      vi:"Vi phạm thứ cấp (secondary infringement) là gì?",
      opts:[{k:'A',en:"Making your own copy",vi:"Tự tạo bản sao"},{k:'B',en:"Dealing with unauthorized copies like distributing or selling them",vi:"Xử lý các bản sao trái phép như phân phối hoặc bán chúng"},{k:'C',en:"Writing about a copyrighted movie",vi:"Viết về bộ phim có bản quyền"},{k:'D',en:"Posting your work online",vi:"Đăng tác phẩm của bạn lên mạng"}],
      ans:'B', exp:`<strong>Vi phạm thứ cấp</strong> không phải là trực tiếp sao chép mà là <strong>xử lý các bản sao trái phép</strong> — phân phối, bán hoặc nhập khẩu hàng lậu. Khác với vi phạm sơ cấp là trực tiếp tạo ra bản sao.` },

    { en:"What condition must be met for fair dealing in research?",
      vi:"Điều kiện nào phải được đáp ứng để sử dụng hợp lý trong nghiên cứu?",
      opts:[{k:'A',en:"Author must be credited",vi:"Phải ghi nhận tác giả"},{k:'B',en:"Work must be printed",vi:"Tác phẩm phải được in"},{k:'C',en:"Use must be fair and reasonable",vi:"Việc sử dụng phải công bằng và hợp lý"},{k:'D',en:"Work must be older than 10 years",vi:"Tác phẩm phải cũ hơn 10 năm"}],
      ans:'C', exp:`<strong>Fair dealing</strong> trong nghiên cứu yêu cầu việc sử dụng phải <strong>công bằng và hợp lý</strong> — tức là chỉ dùng phần cần thiết, không thay thế việc mua tác phẩm gốc, và phục vụ mục đích nghiên cứu thực sự.` },

    { en:"What types of works can be used under fair dealing for review?",
      vi:"Loại tác phẩm nào có thể sử dụng theo fair dealing cho mục đích review?",
      opts:[{k:'A',en:"Only news",vi:"Chỉ tin tức"},{k:'B',en:"Literary, artistic, and media works",vi:"Tác phẩm văn học, nghệ thuật và truyền thông"},{k:'C',en:"Only textbooks",vi:"Chỉ sách giáo khoa"},{k:'D',en:"Only registered works",vi:"Chỉ tác phẩm đã đăng ký"}],
      ans:'B', exp:`Fair dealing cho mục đích review áp dụng với <strong>tác phẩm văn học, nghệ thuật, và truyền thông</strong> — bao gồm sách, phim, âm nhạc, tranh nghệ thuật và các nội dung truyền thông khác.` },

    { en:"Is copying a large part of a database without permission allowed?",
      vi:"Có được phép sao chép phần lớn cơ sở dữ liệu mà không có phép không?",
      opts:[{k:'A',en:"No, it's a copyright violation",vi:"Không, đây là vi phạm bản quyền"},{k:'B',en:"Yes, if not published",vi:"Có, nếu chưa được xuất bản"},{k:'C',en:"Yes, if digital",vi:"Có, nếu là bản kỹ thuật số"},{k:'D',en:"Only if it's educational",vi:"Chỉ nếu là mục đích giáo dục"}],
      ans:'A', exp:`Cơ sở dữ liệu được bảo vệ bởi <strong>database right</strong> và bản quyền. Sao chép phần lớn mà không có phép là vi phạm rõ ràng — ngay cả khi mục đích là giáo dục cũng không tự động được phép.` },

    { en:"Is scanning a printed work into PDF format considered copyright infringement?",
      vi:"Quét tác phẩm in thành PDF có được coi là vi phạm bản quyền không?",
      opts:[{k:'A',en:"Not if it's for school",vi:"Không nếu để dùng trong trường"},{k:'B',en:"Yes, unless permitted under fair use or license",vi:"Có, trừ khi được phép theo fair use hoặc giấy phép"},{k:'C',en:"Only if sold",vi:"Chỉ khi đem bán"},{k:'D',en:"Only if translated",vi:"Chỉ khi dịch sang ngôn ngữ khác"}],
      ans:'B', exp:`Quét tài liệu là <strong>sao chép</strong> — vi phạm bản quyền trừ khi: (1) được cấp phép rõ ràng, (2) thuộc phạm vi fair dealing, hoặc (3) tác phẩm đã vào public domain.` },

    { en:"What problem may arise from inconsistent copyright terms across countries?",
      vi:"Vấn đề gì có thể phát sinh từ sự không nhất quán về thời hạn bản quyền giữa các quốc gia?",
      opts:[{k:'A',en:"More public access",vi:"Tiếp cận công khai nhiều hơn"},{k:'B',en:"Legal uncertainty in international licensing and enforcement",vi:"Sự không chắc chắn pháp lý trong cấp phép và thực thi quốc tế"},{k:'C',en:"Easier registration",vi:"Đăng ký dễ hơn"},{k:'D',en:"Harmonized royalty collection",vi:"Thu tiền bản quyền được hài hòa hóa"}],
      ans:'B', exp:`Khi mỗi nước có quy định thời hạn bản quyền khác nhau, các doanh nghiệp gặp <strong>khó khăn pháp lý</strong> khi cấp phép hoặc thực thi quyền xuyên biên giới — cùng một tác phẩm có thể hết hạn ở nước này nhưng vẫn còn hiệu lực ở nước khác.` },

    { en:"What condition is most critical in determining whether parody is fair dealing?",
      vi:"Điều kiện nào quan trọng nhất để xác định parody có phải là fair dealing không?",
      opts:[{k:'A',en:"Author permission",vi:"Được tác giả cho phép"},{k:'B',en:"It does not substitute the original work's market",vi:"Nó không thay thế thị trường của tác phẩm gốc"},{k:'C',en:"It's uploaded to YouTube",vi:"Nó được tải lên YouTube"},{k:'D',en:"It uses music only",vi:"Nó chỉ sử dụng âm nhạc"}],
      ans:'B', exp:`Điều kiện then chốt: parody <strong>không được thay thế việc mua tác phẩm gốc</strong>. Nếu parody làm giảm doanh thu của tác phẩm gốc, nó vượt qua ranh giới fair dealing.` },

    { en:"Which of the following is a key distinction between moral and economic rights?",
      vi:"Điểm khác biệt chính giữa quyền tinh thần và quyền kinh tế là gì?",
      opts:[{k:'A',en:"Moral rights are non-transferable; economic rights can be assigned",vi:"Quyền tinh thần không thể chuyển nhượng; quyền kinh tế có thể chuyển nhượng"},{k:'B',en:"Both must be registered",vi:"Cả hai đều phải đăng ký"},{k:'C',en:"Economic rights are waived by default",vi:"Quyền kinh tế được từ bỏ mặc định"},{k:'D',en:"Only moral rights apply to software",vi:"Chỉ quyền tinh thần áp dụng cho phần mềm"}],
      ans:'A', exp:`Sự khác biệt cốt lõi: <strong>Quyền tinh thần gắn liền với tác giả</strong>, không thể bán hay chuyển nhượng. <strong>Quyền kinh tế</strong> có thể được chuyển nhượng hoặc cấp phép cho người khác.` },

    { en:"What does the fair use doctrine provide?",
      vi:"Học thuyết fair use (sử dụng hợp lý) cung cấp điều gì?",
      opts:[{k:'A',en:"Absolute protection for corporations",vi:"Bảo vệ tuyệt đối cho doanh nghiệp"},{k:'B',en:"A way to bypass copyright",vi:"Cách để bỏ qua bản quyền"},{k:'C',en:"Flexibility in using copyrighted works",vi:"Tính linh hoạt trong việc sử dụng tác phẩm có bản quyền"},{k:'D',en:"Unrestricted commercial use",vi:"Sử dụng thương mại không giới hạn"}],
      ans:'C', exp:`Fair use cho phép <strong>sử dụng linh hoạt</strong> tác phẩm có bản quyền trong những trường hợp như: bình luận, giảng dạy, tin tức, nghiên cứu — mà không cần xin phép, nhưng phải trong giới hạn hợp lý.` },

    { en:"Which argument best supports stronger protection for computer-generated works?",
      vi:"Lập luận nào ủng hộ bảo vệ mạnh hơn cho tác phẩm do máy tính tạo ra?",
      opts:[{k:'A',en:"Computers should own property",vi:"Máy tính nên được sở hữu tài sản"},{k:'B',en:"They are increasingly indistinguishable from human-authored content",vi:"Chúng ngày càng không thể phân biệt với nội dung do con người tạo"},{k:'C',en:"They must remain public domain",vi:"Chúng phải thuộc miền công cộng"},{k:'D',en:"Human creators lose value",vi:"Người sáng tạo con người mất giá trị"}],
      ans:'B', exp:`Lý do mạnh nhất: khi <strong>AI tạo ra tác phẩm không thể phân biệt với tác phẩm của con người</strong>, việc thiếu bảo hộ sẽ tạo ra bất công cho những người đầu tư xây dựng và lập trình hệ thống AI đó.` },

    { en:"What condition is required for joint owners to license their work?",
      vi:"Điều kiện nào cần thiết để đồng sở hữu cấp phép tác phẩm?",
      opts:[{k:'A',en:"Any one author may license it",vi:"Bất kỳ tác giả nào cũng có thể cấp phép"},{k:'B',en:"The publisher decides",vi:"Nhà xuất bản quyết định"},{k:'C',en:"Mutual consent of all joint owners",vi:"Sự đồng ý của tất cả đồng sở hữu"},{k:'D',en:"Fair use is automatically applied",vi:"Fair use tự động áp dụng"}],
      ans:'C', exp:`Trong trường hợp <strong>đồng sở hữu</strong>, tất cả chủ sở hữu phải đồng ý mới có thể cấp phép cho bên thứ ba — không ai có quyền đơn phương cấp phép mà không có sự đồng thuận của những người còn lại.` },
  ],

  // ----------------------------------------------------------
  dr: [
    { en:"Which of the following is most likely covered by design right?",
      vi:"Điều nào sau đây nhiều khả năng được bảo vệ bởi design right?",
      opts:[{k:'A',en:"A graphic user interface",vi:"Giao diện người dùng đồ họa"},{k:'B',en:"The shape of a chair",vi:"Hình dạng của chiếc ghế"},{k:'C',en:"A software license",vi:"Giấy phép phần mềm"},{k:'D',en:"A company slogan",vi:"Khẩu hiệu công ty"}],
      ans:'B', exp:`<strong>Design right</strong> bảo vệ hình dạng và cấu hình vật lý của sản phẩm — như hình dạng chiếc ghế. GUI có thể được bảo vệ bởi bản quyền, slogan bởi nhãn hiệu, license bởi hợp đồng.` },

    { en:"Which of the following is considered a legal remedy for infringement?",
      vi:"Điều nào sau đây được coi là biện pháp khắc phục pháp lý cho vi phạm?",
      opts:[{k:'A',en:"Redesign suggestions",vi:"Gợi ý thiết kế lại"},{k:'B',en:"Registration of new design",vi:"Đăng ký thiết kế mới"},{k:'C',en:"Injunction and damages",vi:"Lệnh cấm và bồi thường thiệt hại"},{k:'D',en:"Transfer of license",vi:"Chuyển nhượng giấy phép"}],
      ans:'C', exp:`Hai biện pháp pháp lý phổ biến nhất: <strong>Injunction</strong> (lệnh tòa án buộc dừng vi phạm ngay lập tức) và <strong>Damages</strong> (bồi thường thiệt hại tài chính cho chủ sở hữu).` },

    { en:"How must a design right assignment be made to be enforceable?",
      vi:"Chuyển nhượng design right phải được thực hiện như thế nào để có hiệu lực pháp lý?",
      opts:[{k:'A',en:"Orally",vi:"Bằng lời nói"},{k:'B',en:"In writing",vi:"Bằng văn bản"},{k:'C',en:"On social media",vi:"Trên mạng xã hội"},{k:'D',en:"Through invoice only",vi:"Chỉ qua hóa đơn"}],
      ans:'B', exp:`Chuyển nhượng design right <strong>phải bằng văn bản</strong> và có chữ ký để có hiệu lực pháp lý. Thỏa thuận miệng hoặc không có ký kết không được tòa án công nhận.` },

    { en:"How often must a registered design be renewed?",
      vi:"Thiết kế đã đăng ký phải được gia hạn bao lâu một lần?",
      opts:[{k:'A',en:"Every year",vi:"Mỗi năm"},{k:'B',en:"Every 5 years",vi:"Mỗi 5 năm"},{k:'C',en:"Once every 10 years",vi:"10 năm một lần"},{k:'D',en:"Monthly",vi:"Hàng tháng"}],
      ans:'B', exp:`Tại UK, <strong>registered design</strong> cần được gia hạn mỗi <strong>5 năm</strong> một lần, với thời hạn bảo hộ tối đa là 25 năm (5 lần gia hạn).` },

    { en:"What determines ownership in commissioned design work?",
      vi:"Điều gì quyết định quyền sở hữu trong công việc thiết kế được thuê?",
      opts:[{k:'A',en:"Verbal agreement",vi:"Thỏa thuận miệng"},{k:'B',en:"Designer's reputation",vi:"Danh tiếng của nhà thiết kế"},{k:'C',en:"Contractual terms",vi:"Điều khoản hợp đồng"},{k:'D',en:"Trademark registration",vi:"Đăng ký nhãn hiệu"}],
      ans:'C', exp:`Khi thiết kế theo đặt hàng, <strong>điều khoản hợp đồng</strong> quyết định ai sở hữu. Nếu không có hợp đồng rõ ràng, theo luật UK mặc định người thuê (commissioner) thường sở hữu.` },

    { en:"What does novelty mean in design registration?",
      vi:"'Novelty' (tính mới) có nghĩa gì trong đăng ký thiết kế?",
      opts:[{k:'A',en:"The design is old but reused",vi:"Thiết kế cũ nhưng được tái sử dụng"},{k:'B',en:"The design is new and not previously disclosed",vi:"Thiết kế mới và chưa từng được công bố trước đó"},{k:'C',en:"The design has no color",vi:"Thiết kế không có màu sắc"},{k:'D',en:"The design has prior use",vi:"Thiết kế đã được sử dụng trước"}],
      ans:'B', exp:`<strong>Novelty (tính mới)</strong> là yêu cầu thiết kế chưa từng được công bố công khai trước ngày đăng ký. Nếu thiết kế đã xuất hiện trước đó — dù của chính người đăng ký — nó sẽ không đủ điều kiện đăng ký.` },

    { en:"What is one limitation of relying solely on design right?",
      vi:"Một hạn chế của việc chỉ dựa vào design right là gì?",
      opts:[{k:'A',en:"It lasts too long",vi:"Kéo dài quá lâu"},{k:'B',en:"It applies to patents",vi:"Áp dụng cho sáng chế"},{k:'C',en:"It's harder to enforce due to lack of registration",vi:"Khó thực thi hơn vì không có đăng ký"},{k:'D',en:"It must be renewed monthly",vi:"Phải gia hạn hàng tháng"}],
      ans:'C', exp:`Design right không đăng ký <strong>khó thực thi</strong> vì không có bằng chứng công khai về ngày tạo ra và quyền sở hữu. Khi tranh chấp, người giữ bản gốc phải tự chứng minh quyền của mình.` },

    { en:"What is the main goal of remedies for design right infringement?",
      vi:"Mục tiêu chính của biện pháp khắc phục vi phạm design right là gì?",
      opts:[{k:'A',en:"To advertise designs",vi:"Để quảng cáo thiết kế"},{k:'B',en:"To stop unauthorized use and compensate losses",vi:"Để dừng sử dụng trái phép và bồi thường thiệt hại"},{k:'C',en:"To promote creativity",vi:"Để thúc đẩy sáng tạo"},{k:'D',en:"To enforce software rights",vi:"Để thực thi quyền phần mềm"}],
      ans:'B', exp:`Mục tiêu của biện pháp khắc phục là kép: <strong>dừng hành vi vi phạm</strong> (thông qua injunction) và <strong>bồi thường thiệt hại</strong> đã xảy ra cho chủ sở hữu design right.` },

    { en:"What is a 'prior use' defense?",
      vi:"'Prior use defense' (biện hộ sử dụng trước) là gì?",
      opts:[{k:'A',en:"Using a design in future products",vi:"Sử dụng thiết kế trong sản phẩm tương lai"},{k:'B',en:"The accused was using the design before it was registered",vi:"Bị đơn đã sử dụng thiết kế trước khi nó được đăng ký"},{k:'C',en:"Refusing to register",vi:"Từ chối đăng ký"},{k:'D',en:"Blocking another's trademark",vi:"Chặn nhãn hiệu của người khác"}],
      ans:'B', exp:`<strong>Prior use defense</strong>: nếu bị đơn có thể chứng minh họ đã sử dụng thiết kế <strong>trước khi nguyên đơn đăng ký</strong>, họ có thể được phép tiếp tục sử dụng — nhưng không được mở rộng phạm vi sử dụng.` },

    { en:"Which strategy increases a design's overall legal strength?",
      vi:"Chiến lược nào tăng sức mạnh pháp lý tổng thể của một thiết kế?",
      opts:[{k:'A',en:"Uploading it to social media",vi:"Tải lên mạng xã hội"},{k:'B',en:"Waiting for someone to copy it",vi:"Chờ ai đó sao chép"},{k:'C',en:"Combining registered design, design right, and copyright",vi:"Kết hợp registered design, design right và bản quyền"},{k:'D',en:"Posting disclaimers",vi:"Đăng tuyên bố miễn trừ trách nhiệm"}],
      ans:'C', exp:`Chiến lược tốt nhất là <strong>kết hợp nhiều lớp bảo vệ</strong>: Registered Design (mạnh nhất, có hồ sơ), Design Right (tự động), và Copyright (nếu có tính nghệ thuật) — tạo ra lớp bảo vệ toàn diện.` },

    { en:"Under which Act was design right introduced in the UK?",
      vi:"Design right được giới thiệu tại Anh theo Đạo luật nào?",
      opts:[{k:'A',en:"Trademark Act 1994",vi:"Đạo luật Nhãn hiệu 1994"},{k:'B',en:"Copyright, Designs and Patents Act 1988",vi:"Đạo luật Bản quyền, Thiết kế và Sáng chế 1988"},{k:'C',en:"Intellectual Property Act 2003",vi:"Đạo luật Sở hữu Trí tuệ 2003"},{k:'D',en:"Design Protection Law 1999",vi:"Luật Bảo hộ Thiết kế 1999"}],
      ans:'B', exp:`<strong>Copyright, Designs and Patents Act 1988 (CDPA 1988)</strong> là đạo luật tổng hợp của Anh quy định về bản quyền, design right và sáng chế — vẫn là nền tảng pháp lý IP chính tại UK đến ngày nay.` },

    { en:"Why might a designer choose to register their design instead of relying on design right?",
      vi:"Tại sao nhà thiết kế có thể chọn đăng ký thiết kế thay vì chỉ dựa vào design right?",
      opts:[{k:'A',en:"To avoid moral rights",vi:"Để tránh quyền tinh thần"},{k:'B',en:"To limit their protection",vi:"Để hạn chế bảo hộ"},{k:'C',en:"To gain longer and stronger protection",vi:"Để được bảo hộ lâu hơn và mạnh hơn"},{k:'D',en:"Because registration is free",vi:"Vì đăng ký miễn phí"}],
      ans:'C', exp:`<strong>Registered design</strong> cho phép bảo hộ tới 25 năm, dễ thực thi hơn (có hồ sơ công khai), và bảo vệ cả trường hợp thiết kế tương tự được tạo ra độc lập. Design right không đăng ký chỉ kéo dài 10-15 năm.` },

    { en:"What legal action is appropriate in a get-up infringement case?",
      vi:"Hành động pháp lý nào phù hợp trong vụ vi phạm get-up?",
      opts:[{k:'A',en:"Apply for patent",vi:"Nộp đơn xin sáng chế"},{k:'B',en:"File a tax complaint",vi:"Nộp khiếu nại thuế"},{k:'C',en:"Take action under passing-off laws",vi:"Khởi kiện theo luật passing-off"},{k:'D',en:"File for copyright infringement",vi:"Kiện vi phạm bản quyền"}],
      ans:'C', exp:`Vi phạm get-up được xử lý thông qua <strong>luật passing-off</strong> — vì get-up không được đăng ký như nhãn hiệu nhưng vẫn được bảo vệ khi có danh tiếng và người tiêu dùng bị nhầm lẫn.` },

    { en:"When is it most beneficial to file under both copyright and design law?",
      vi:"Khi nào nên nộp đơn theo cả bản quyền và luật thiết kế?",
      opts:[{k:'A',en:"When using Creative Commons",vi:"Khi sử dụng Creative Commons"},{k:'B',en:"When the design has both functional and artistic elements",vi:"Khi thiết kế có cả yếu tố chức năng và nghệ thuật"},{k:'C',en:"When trademark is pending",vi:"Khi nhãn hiệu đang chờ xét duyệt"},{k:'D',en:"When the designer is unknown",vi:"Khi không biết nhà thiết kế là ai"}],
      ans:'B', exp:`Khi thiết kế vừa có <strong>yếu tố chức năng</strong> (được bảo vệ bởi design right) vừa có <strong>yếu tố nghệ thuật</strong> (bảo vệ bởi bản quyền), việc đăng ký cả hai tạo ra lớp bảo vệ đa tầng toàn diện nhất.` },
  ],

  // ----------------------------------------------------------
  sm: [
    { en:"What might a former employee violate if they take over a company's account?",
      vi:"Nhân viên cũ có thể vi phạm điều gì nếu họ chiếm đoạt tài khoản của công ty?",
      opts:[{k:'A',en:"Do not violate",vi:"Không vi phạm"},{k:'B',en:"Social policy",vi:"Chính sách xã hội"},{k:'C',en:"CFAA (unauthorized access)",vi:"CFAA (truy cập trái phép)"},{k:'D',en:"Export control",vi:"Kiểm soát xuất khẩu"}],
      ans:'C', exp:`<strong>CFAA (Computer Fraud and Abuse Act)</strong> cấm truy cập trái phép vào hệ thống máy tính. Khi nhân viên cũ chiếm quyền tài khoản công ty sau khi đã nghỉ việc, đây là hành vi vi phạm CFAA.` },

    { en:"What should employees do with personal and professional social media accounts?",
      vi:"Nhân viên nên làm gì với tài khoản mạng xã hội cá nhân và công việc?",
      opts:[{k:'A',en:"Share all access",vi:"Chia sẻ tất cả quyền truy cập"},{k:'B',en:"Delete them",vi:"Xóa chúng đi"},{k:'C',en:"Keep them separate",vi:"Giữ chúng tách biệt"},{k:'D',en:"Merge into one",vi:"Gộp lại thành một"}],
      ans:'C', exp:`Việc <strong>tách biệt tài khoản cá nhân và công việc</strong> giúp tránh nhầm lẫn về quyền sở hữu, bảo vệ bí mật kinh doanh, và ngăn ngừa tranh chấp pháp lý khi nhân viên nghỉ việc.` },

    { en:"BBC revised its social media policy in:",
      vi:"BBC sửa đổi chính sách mạng xã hội vào năm:",
      opts:[{k:'A',en:"2021",vi:"2021"},{k:'B',en:"2019",vi:"2019"},{k:'C',en:"2005",vi:"2005"},{k:'D',en:"1999",vi:"1999"}],
      ans:'A', exp:`BBC sửa đổi chính sách mạng xã hội vào <strong>năm 2021</strong>, yêu cầu nhân viên thận trọng hơn trong các phát ngôn trên mạng xã hội để bảo vệ tính trung lập và uy tín của đài.` },

    { en:"Before sharing breaking news content, journalists should:",
      vi:"Trước khi chia sẻ tin tức nóng, nhà báo nên:",
      opts:[{k:'A',en:"Make it viral",vi:"Làm nó lan truyền"},{k:'B',en:"Verify it",vi:"Xác minh thông tin"},{k:'C',en:"Ask for donations",vi:"Xin quyên góp"},{k:'D',en:"Post quickly",vi:"Đăng nhanh nhất có thể"}],
      ans:'B', exp:`Nguyên tắc báo chí cơ bản: <strong>xác minh trước khi đăng</strong>. Đưa tin chưa xác minh gây hại cho uy tín nhà báo và tổ chức, có thể dẫn đến trách nhiệm pháp lý về thông tin sai lệch.` },

    { en:"Which news outlet discourages discussing confidential sources online?",
      vi:"Cơ quan truyền thông nào không khuyến khích thảo luận về nguồn tin bảo mật trực tuyến?",
      opts:[{k:'A',en:"CNN",vi:"CNN"},{k:'B',en:"Wall Street Journal",vi:"Wall Street Journal"},{k:'C',en:"TikTok",vi:"TikTok"},{k:'D',en:"Google",vi:"Google"}],
      ans:'B', exp:`<strong>Wall Street Journal</strong> có chính sách rõ ràng không khuyến khích nhân viên thảo luận về nguồn tin bảo mật trên mạng xã hội — để bảo vệ nguồn tin và tính độc lập báo chí.` },

    { en:"Which newspaper recommends consistent social connections?",
      vi:"Tờ báo nào khuyến nghị duy trì kết nối xã hội nhất quán?",
      opts:[{k:'A',en:"Roanoke Times",vi:"Roanoke Times"},{k:'B',en:"The Guardian",vi:"The Guardian"},{k:'C',en:"BBC",vi:"BBC"},{k:'D',en:"Forbes",vi:"Forbes"}],
      ans:'A', exp:`<strong>Roanoke Times</strong> được đề cập trong tài liệu khóa học vì chính sách khuyến nghị nhân viên duy trì kết nối xã hội nhất quán trong hoạt động truyền thông.` },

    { en:"Why do legal disputes over social media continue to rise?",
      vi:"Tại sao tranh chấp pháp lý về mạng xã hội tiếp tục gia tăng?",
      opts:[{k:'A',en:"Lack of hashtags",vi:"Thiếu hashtag"},{k:'B',en:"Blurring lines between personal and professional accounts",vi:"Ranh giới mờ giữa tài khoản cá nhân và công việc"},{k:'C',en:"Declining followers",vi:"Số người theo dõi giảm"},{k:'D',en:"Faster internet",vi:"Internet nhanh hơn"}],
      ans:'B', exp:`Nguyên nhân chính: <strong>ranh giới mờ nhạt giữa tài khoản cá nhân và công việc</strong> — khi nhân viên dùng một tài khoản cho cả hai mục đích, câu hỏi về quyền sở hữu và trách nhiệm pháp lý trở nên phức tạp.` },

    { en:"What is one ethical benefit of using social media in communication?",
      vi:"Một lợi ích đạo đức của việc sử dụng mạng xã hội trong truyền thông là gì?",
      opts:[{k:'A',en:"To mislead the audience with fake news",vi:"Để đánh lạc hướng khán giả bằng tin giả"},{k:'B',en:"To post without accountability",vi:"Để đăng bài mà không chịu trách nhiệm"},{k:'C',en:"To provide transparent and real-time communication",vi:"Để cung cấp giao tiếp minh bạch và theo thời gian thực"},{k:'D',en:"To ignore public concerns",vi:"Để bỏ qua lo ngại của công chúng"}],
      ans:'C', exp:`Lợi ích đạo đức của mạng xã hội là <strong>giao tiếp minh bạch, thời gian thực</strong> — cho phép tổ chức và cá nhân tương tác trực tiếp với công chúng, xây dựng lòng tin và trách nhiệm giải trình.` },

    { en:"Social media ownership after employment should be addressed:",
      vi:"Quyền sở hữu mạng xã hội sau khi nghỉ việc nên được giải quyết:",
      opts:[{k:'A',en:"Through word of mouth",vi:"Bằng truyền miệng"},{k:'B',en:"In employment agreements",vi:"Trong hợp đồng lao động"},{k:'C',en:"By the IT team",vi:"Bởi bộ phận IT"},{k:'D',en:"Via brand audits",vi:"Qua kiểm toán thương hiệu"}],
      ans:'B', exp:`<strong>Hợp đồng lao động</strong> là nơi phù hợp nhất để quy định rõ: tài khoản nào thuộc công ty, tài khoản nào thuộc cá nhân, và điều gì xảy ra với follower/nội dung khi nhân viên nghỉ việc.` },

    { en:"An employment contract should define:",
      vi:"Hợp đồng lao động nên quy định:",
      opts:[{k:'A',en:"Hashtag trends",vi:"Xu hướng hashtag"},{k:'B',en:"Who controls the account and what happens after employment ends",vi:"Ai kiểm soát tài khoản và điều gì xảy ra sau khi hợp đồng kết thúc"},{k:'C',en:"Meeting times",vi:"Thời gian họp"},{k:'D',en:"Survey questions",vi:"Câu hỏi khảo sát"}],
      ans:'B', exp:`Hợp đồng cần rõ ràng về: <strong>ai sở hữu tài khoản</strong>, ai có quyền truy cập, và <strong>quy trình chuyển giao</strong> khi nhân viên rời đi — điều này ngăn ngừa tranh chấp tốn kém về sau.` },

    { en:"What is a common method to resolve social media ownership disputes?",
      vi:"Phương pháp phổ biến để giải quyết tranh chấp quyền sở hữu mạng xã hội là gì?",
      opts:[{k:'A',en:"Complaining publicly",vi:"Khiếu nại công khai"},{k:'B',en:"Mediation or legal agreement",vi:"Hòa giải hoặc thỏa thuận pháp lý"},{k:'C',en:"Changing passwords",vi:"Đổi mật khẩu"},{k:'D',en:"Hiring influencers",vi:"Thuê người có ảnh hưởng"}],
      ans:'B', exp:`Phương pháp phổ biến và hiệu quả nhất là <strong>hòa giải hoặc thỏa thuận pháp lý</strong> — ít tốn kém hơn kiện tụng, bảo mật hơn, và thường đạt được kết quả nhanh hơn cho cả hai bên.` },

    { en:"NPR discourages:",
      vi:"NPR không khuyến khích:",
      opts:[{k:'A',en:"Reporting from the field",vi:"Phóng sự thực địa"},{k:'B',en:"Sharing internal disagreements on social platforms",vi:"Chia sẻ bất đồng nội bộ trên mạng xã hội"},{k:'C',en:"Posting breaking news",vi:"Đăng tin tức nóng"},{k:'D',en:"Using photos",vi:"Sử dụng ảnh"}],
      ans:'B', exp:`NPR có chính sách <strong>không khuyến khích nhân viên chia sẻ bất đồng nội bộ lên mạng xã hội</strong> — điều này bảo vệ uy tín tổ chức và đảm bảo các vấn đề nội bộ được giải quyết qua kênh phù hợp.` },

    { en:"What is one key message from this module?",
      vi:"Thông điệp chính của chủ đề này là gì?",
      opts:[{k:'A',en:"Social media is fun",vi:"Mạng xã hội thú vị"},{k:'B',en:"Persona ownership must be legally addressed in employment",vi:"Quyền sở hữu 'persona' phải được giải quyết pháp lý trong hợp đồng lao động"},{k:'C',en:"Followers mean fame",vi:"Số người theo dõi đồng nghĩa với danh tiếng"},{k:'D',en:"Emails must be private",vi:"Email phải là riêng tư"}],
      ans:'B', exp:`Thông điệp cốt lõi: <strong>quyền sở hữu persona (nhân vật trực tuyến) và tài khoản mạng xã hội</strong> phải được quy định rõ trong hợp đồng lao động để tránh tranh chấp khi nhân viên nghỉ việc.` },
  ],

  // ----------------------------------------------------------
  li: [
    { en:"What is a common outcome of licensing settlements?",
      vi:"Kết quả phổ biến của giải quyết tranh chấp cấp phép là gì?",
      opts:[{k:'A',en:"Trademark registration",vi:"Đăng ký nhãn hiệu"},{k:'B',en:"Payment of royalties as compensation",vi:"Thanh toán tiền bản quyền như bồi thường"},{k:'C',en:"Creation of joint ventures",vi:"Thành lập liên doanh"},{k:'D',en:"Patent cancellation",vi:"Hủy bằng sáng chế"}],
      ans:'B', exp:`Trong các giải quyết tranh chấp cấp phép, <strong>thanh toán tiền bản quyền (royalties)</strong> là kết quả phổ biến nhất — bên vi phạm trả tiền để được tiếp tục sử dụng IP, tránh kiện tụng kéo dài.` },

    { en:"What are the two main forms of financial compensation in licensing?",
      vi:"Hai hình thức bồi thường tài chính chính trong cấp phép là gì?",
      opts:[{k:'A',en:"Rent and loan",vi:"Tiền thuê và khoản vay"},{k:'B',en:"Lump sum and royalties",vi:"Thanh toán một lần và tiền bản quyền"},{k:'C',en:"Fees and donations",vi:"Phí và quyên góp"},{k:'D',en:"Interest and bonus",vi:"Lãi suất và tiền thưởng"}],
      ans:'B', exp:`Hai hình thức chính: <strong>Lump sum</strong> (trả một lần khi ký hợp đồng) và <strong>Royalties</strong> (trả theo tỷ lệ dựa trên doanh thu hoặc số lượng bán). Nhiều hợp đồng kết hợp cả hai.` },

    { en:"If a settlement is reached, what is often included?",
      vi:"Khi đạt được thỏa thuận dàn xếp, điều gì thường được bao gồm?",
      opts:[{k:'A',en:"Cancellation of copyright",vi:"Hủy bản quyền"},{k:'B',en:"Compensation or license terms",vi:"Bồi thường hoặc điều khoản cấp phép"},{k:'C',en:"New creation",vi:"Tạo tác phẩm mới"},{k:'D',en:"Criminal penalty",vi:"Hình phạt hình sự"}],
      ans:'B', exp:`Dàn xếp tranh chấp IP thường bao gồm: <strong>bồi thường tài chính</strong> cho thiệt hại đã xảy ra VÀ/HOẶC <strong>điều khoản cấp phép</strong> cho phép tiếp tục sử dụng có kiểm soát.` },

    { en:"A well-structured license ensures:",
      vi:"Một giấy phép được cấu trúc tốt đảm bảo:",
      opts:[{k:'A',en:"Public access",vi:"Quyền truy cập công khai"},{k:'B',en:"Mutual benefit and long-term success",vi:"Lợi ích cho cả hai bên và thành công lâu dài"},{k:'C',en:"Lack of enforceability",vi:"Thiếu khả năng thực thi"},{k:'D',en:"Faster trademarking",vi:"Đăng ký nhãn hiệu nhanh hơn"}],
      ans:'B', exp:`Giấy phép tốt cân bằng quyền lợi của cả hai bên — bảo đảm <strong>lợi ích lâu dài cho cả licensor và licensee</strong>, tránh tranh chấp, và tạo nền tảng cho mối quan hệ kinh doanh bền vững.` },

    { en:"What does the Western Electric case demonstrate?",
      vi:"Vụ Western Electric chứng minh điều gì?",
      opts:[{k:'A',en:"Patent cancellation",vi:"Hủy bằng sáng chế"},{k:'B',en:"Global licensing of core technologies",vi:"Cấp phép toàn cầu cho công nghệ cốt lõi"},{k:'C',en:"Design outsourcing",vi:"Thuê ngoài thiết kế"},{k:'D',en:"Royalty-free systems",vi:"Hệ thống miễn tiền bản quyền"}],
      ans:'B', exp:`Vụ <strong>Western Electric</strong> là ví dụ kinh điển về cấp phép công nghệ toàn cầu — chứng minh rằng cấp phép công nghệ cốt lõi có thể trở thành nguồn doanh thu chính và thúc đẩy phát triển công nghiệp toàn cầu.` },

    { en:"Improvement clauses relate to:",
      vi:"Điều khoản cải tiến (improvement clauses) liên quan đến:",
      opts:[{k:'A',en:"New technology or enhancements during the license period",vi:"Công nghệ mới hoặc cải tiến trong thời gian cấp phép"},{k:'B',en:"Advertising strategy",vi:"Chiến lược quảng cáo"},{k:'C',en:"Currency conversion",vi:"Quy đổi ngoại tệ"},{k:'D',en:"Employee contracts",vi:"Hợp đồng nhân viên"}],
      ans:'A', exp:`<strong>Improvement clauses</strong> quy định điều gì xảy ra khi có cải tiến hoặc công nghệ mới trong thời gian hợp đồng cấp phép — ai sở hữu cải tiến đó, và liệu cải tiến có nằm trong phạm vi cấp phép không.` },

    { en:"If an exclusive licensee sublicenses the work to others without permission, what is violated?",
      vi:"Nếu người được cấp phép độc quyền cho người khác cấp phép lại mà không có phép, điều gì bị vi phạm?",
      opts:[{k:'A',en:"Fair use",vi:"Sử dụng hợp lý"},{k:'B',en:"The exclusivity clause in the licensing agreement",vi:"Điều khoản độc quyền trong hợp đồng cấp phép"},{k:'C',en:"Public performance right",vi:"Quyền biểu diễn công khai"},{k:'D',en:"Attribution right",vi:"Quyền ghi nhận"}],
      ans:'B', exp:`Khi licensee độc quyền tự ý cấp phép lại (sublicense), họ vi phạm <strong>điều khoản độc quyền</strong> trong hợp đồng — vì quyền sublicense phải được licensor đồng ý và ghi rõ trong hợp đồng.` },

    { en:"Tax consequences in licensing can impact:",
      vi:"Hậu quả thuế trong cấp phép có thể ảnh hưởng đến:",
      opts:[{k:'A',en:"Sales performance only",vi:"Chỉ hiệu suất bán hàng"},{k:'B',en:"The net income for both parties",vi:"Thu nhập ròng của cả hai bên"},{k:'C',en:"Branding effectiveness",vi:"Hiệu quả thương hiệu"},{k:'D',en:"Use of social media",vi:"Sử dụng mạng xã hội"}],
      ans:'B', exp:`Thuế trong cấp phép (withholding tax, VAT, thuế thu nhập từ royalties) ảnh hưởng trực tiếp đến <strong>thu nhập ròng của cả licensor và licensee</strong> — cần được tính toán kỹ trong đàm phán hợp đồng.` },

    { en:"In case of unauthorized use of the licensed technology, the licensee should:",
      vi:"Trong trường hợp công nghệ được cấp phép bị sử dụng trái phép, người được cấp phép nên:",
      opts:[{k:'A',en:"Ignore it",vi:"Bỏ qua"},{k:'B',en:"Send a newsletter",vi:"Gửi bản tin"},{k:'C',en:"Report the infringement to the licensor",vi:"Báo cáo vi phạm cho người cấp phép"},{k:'D',en:"Reduce production",vi:"Giảm sản xuất"}],
      ans:'C', exp:`Người được cấp phép (licensee) có nghĩa vụ <strong>báo cáo vi phạm cho licensor</strong> vì licensor là chủ sở hữu IP và có quyền thực thi. Licensee tự mình khởi kiện mà không thông báo có thể vi phạm hợp đồng.` },

    { en:"One benefit of unregistered get-up rights is that:",
      vi:"Một lợi ích của quyền get-up không đăng ký là:",
      opts:[{k:'A',en:"They require expensive filing",vi:"Chúng yêu cầu nộp phí tốn kém"},{k:'B',en:"They arise through use without formal registration",vi:"Chúng phát sinh qua việc sử dụng mà không cần đăng ký chính thức"},{k:'C',en:"They only work with trademark",vi:"Chúng chỉ hoạt động với nhãn hiệu"},{k:'D',en:"They need to be renewed annually",vi:"Cần được gia hạn hàng năm"}],
      ans:'B', exp:`Lợi thế lớn nhất: quyền get-up <strong>phát sinh tự động</strong> khi bạn sử dụng và xây dựng danh tiếng — không cần nộp đơn, không tốn phí đăng ký, không có thủ tục hành chính phức tạp.` },
  ],

  // ----------------------------------------------------------
  pr: [
    { en:"What is a notable feature of California's privacy laws?",
      vi:"Đặc điểm đáng chú ý của luật quyền riêng tư California là gì?",
      opts:[{k:'A',en:"They apply only to companies based in California",vi:"Chúng chỉ áp dụng cho các công ty có trụ sở ở California"},{k:'B',en:"They regulate the collection and sale of personal data",vi:"Chúng điều chỉnh việc thu thập và bán dữ liệu cá nhân"},{k:'C',en:"They mandate privacy policies for all non-profit organizations",vi:"Chúng bắt buộc chính sách quyền riêng tư cho tất cả tổ chức phi lợi nhuận"},{k:'D',en:"They allow companies to bypass user consent for data collection",vi:"Chúng cho phép công ty bỏ qua sự đồng ý của người dùng"}],
      ans:'B', exp:`<strong>CCPA (California Consumer Privacy Act)</strong> — luật nổi tiếng nhất của California — quy định chặt chẽ về thu thập, sử dụng và bán dữ liệu cá nhân, cho người dùng quyền biết và từ chối.` },

    { en:"What does GDPR require companies to do regarding data collection?",
      vi:"GDPR yêu cầu công ty làm gì về thu thập dữ liệu?",
      opts:[{k:'A',en:"Limit user data to what is necessary for business operations",vi:"Giới hạn dữ liệu người dùng chỉ ở mức cần thiết cho hoạt động kinh doanh"},{k:'B',en:"Place strict requirements on data collection and processing",vi:"Đặt ra yêu cầu nghiêm ngặt về thu thập và xử lý dữ liệu"},{k:'C',en:"Allow unlimited collection of data from users",vi:"Cho phép thu thập dữ liệu không giới hạn"},{k:'D',en:"Automatically collect data without user consent",vi:"Tự động thu thập dữ liệu mà không cần đồng ý"}],
      ans:'B', exp:`<strong>GDPR</strong> đặt ra các yêu cầu nghiêm ngặt: cần sự đồng ý rõ ràng, chỉ thu thập dữ liệu cần thiết (data minimization), quyền xóa dữ liệu (right to erasure), và bảo vệ dữ liệu từ thiết kế (privacy by design).` },

    { en:"Which of the following is a principle of GDPR?",
      vi:"Nguyên tắc nào sau đây là của GDPR?",
      opts:[{k:'A',en:"Lawfulness, fairness, and transparency in data processing",vi:"Tính hợp pháp, công bằng và minh bạch trong xử lý dữ liệu"},{k:'B',en:"Data collection for any purpose without limitations",vi:"Thu thập dữ liệu cho bất kỳ mục đích nào"},{k:'C',en:"Unlimited access to user data for advertising",vi:"Truy cập không giới hạn vào dữ liệu người dùng cho quảng cáo"},{k:'D',en:"Freedom of user choice without restrictions",vi:"Tự do lựa chọn của người dùng không bị hạn chế"}],
      ans:'A', exp:`GDPR dựa trên 7 nguyên tắc cốt lõi, trong đó <strong>tính hợp pháp, công bằng và minh bạch</strong> là nguyên tắc đầu tiên — mọi hoạt động xử lý dữ liệu phải có cơ sở pháp lý và người dùng phải được thông báo.` },

    { en:"In 2013, COPPA expanded to include:",
      vi:"Năm 2013, COPPA mở rộng để bao gồm:",
      opts:[{k:'A',en:"School hours",vi:"Giờ học"},{k:'B',en:"TV time",vi:"Thời gian xem TV"},{k:'C',en:"IP addresses and geolocation",vi:"Địa chỉ IP và vị trí địa lý"},{k:'D',en:"Student grades",vi:"Điểm số học sinh"}],
      ans:'C', exp:`Năm 2013, COPPA được mở rộng để bảo vệ thêm <strong>địa chỉ IP, dữ liệu vị trí địa lý và các định danh trực tuyến</strong> của trẻ em dưới 13 tuổi — phản ánh sự phát triển của công nghệ thu thập dữ liệu.` },

    { en:"What does CFAA stand for?",
      vi:"CFAA là viết tắt của:",
      opts:[{k:'A',en:"Computer Freedom Act Authority",vi:"Cơ quan Tự do Máy tính"},{k:'B',en:"Computer Fraud and Abuse Act",vi:"Đạo luật Gian lận và Lạm dụng Máy tính"},{k:'C',en:"Cyber Facial Access Agreement",vi:"Thỏa thuận Truy cập Khuôn mặt Mạng"},{k:'D',en:"Content Filtering Audit Act",vi:"Đạo luật Kiểm toán Lọc Nội dung"}],
      ans:'B', exp:`<strong>CFAA = Computer Fraud and Abuse Act</strong> — luật liên bang Mỹ về tội phạm mạng, cấm truy cập trái phép vào hệ thống máy tính và đánh cắp dữ liệu.` },

    { en:"What can violate the CFAA?",
      vi:"Điều gì có thể vi phạm CFAA?",
      opts:[{k:'A',en:"Violating a platform's terms of service",vi:"Vi phạm điều khoản dịch vụ của nền tảng"},{k:'B',en:"Posting public content on social media",vi:"Đăng nội dung công khai trên mạng xã hội"},{k:'C',en:"Sharing non-sensitive data",vi:"Chia sẻ dữ liệu không nhạy cảm"},{k:'D',en:"Allowing access to third-party applications",vi:"Cho phép truy cập vào ứng dụng bên thứ ba"}],
      ans:'A', exp:`Theo một số án lệ, <strong>vi phạm điều khoản dịch vụ (ToS)</strong> của nền tảng có thể cấu thành vi phạm CFAA — đặc biệt khi liên quan đến truy cập "không được phép" theo ToS.` },

    { en:"What privacy concern arises from government surveillance of social media?",
      vi:"Lo ngại quyền riêng tư nào phát sinh từ việc chính phủ giám sát mạng xã hội?",
      opts:[{k:'A',en:"Government overreach and violation of privacy rights",vi:"Chính phủ vượt quyền và vi phạm quyền riêng tư"},{k:'B',en:"Limitation on freedom of speech",vi:"Giới hạn tự do ngôn luận"},{k:'C',en:"Over-monitoring of advertisements",vi:"Giám sát quá mức các quảng cáo"},{k:'D',en:"Restriction of user-generated content",vi:"Hạn chế nội dung người dùng tạo ra"}],
      ans:'A', exp:`Lo ngại chính: <strong>chính phủ vượt quyền (government overreach)</strong> khi giám sát quá rộng vi phạm quyền riêng tư của công dân — đặc biệt khi không có lệnh tòa hoặc giám sát không có mục tiêu cụ thể.` },

    { en:"Which of the following is an example of data collection done by Big Tech companies?",
      vi:"Điều nào sau đây là ví dụ về việc thu thập dữ liệu của các công ty Big Tech?",
      opts:[{k:'A',en:"Facial recognition",vi:"Nhận diện khuôn mặt"},{k:'B',en:"Public speech monitoring",vi:"Theo dõi phát ngôn công khai"},{k:'C',en:"Copyright infringement detection",vi:"Phát hiện vi phạm bản quyền"},{k:'D',en:"Anti-terrorism measures",vi:"Biện pháp chống khủng bố"}],
      ans:'A', exp:`<strong>Nhận diện khuôn mặt</strong> là ví dụ điển hình của Big Tech (Facebook/Meta, Google) thu thập dữ liệu sinh trắc học — đây là vấn đề pháp lý nghiêm trọng ở nhiều quốc gia vì thiếu sự đồng ý rõ ràng.` },

    { en:"Most users are unaware of:",
      vi:"Hầu hết người dùng không biết về:",
      opts:[{k:'A',en:"Their device model",vi:"Mẫu thiết bị của họ"},{k:'B',en:"How much data is collected about them",vi:"Bao nhiêu dữ liệu được thu thập về họ"},{k:'C',en:"Who created their apps",vi:"Ai đã tạo ra ứng dụng của họ"},{k:'D',en:"Cookie expiration",vi:"Thời hạn hết hạn của cookie"}],
      ans:'B', exp:`Nghiên cứu liên tục chỉ ra rằng người dùng <strong>không nhận thức được mức độ dữ liệu bị thu thập</strong> — từ vị trí, thói quen duyệt web, đến dữ liệu sức khỏe và tài chính.` },

    { en:"What ethical principle is most at risk when governments increase surveillance of social media?",
      vi:"Nguyên tắc đạo đức nào bị đe dọa nhất khi chính phủ tăng cường giám sát mạng xã hội?",
      opts:[{k:'A',en:"The right to privacy and protection from unwarranted intrusion",vi:"Quyền riêng tư và bảo vệ khỏi sự xâm phạm vô căn cứ"},{k:'B',en:"Freedom of the press",vi:"Tự do báo chí"},{k:'C',en:"The right to intellectual property",vi:"Quyền sở hữu trí tuệ"},{k:'D',en:"The principle of public safety",vi:"Nguyên tắc an toàn công cộng"}],
      ans:'A', exp:`Giám sát nhà nước trên mạng xã hội đe dọa trực tiếp <strong>quyền riêng tư và bảo vệ khỏi sự xâm phạm không có cơ sở</strong> — nguyên tắc được bảo vệ bởi Điều 8 ECHR và nhiều hiến pháp quốc gia.` },

    { en:"Why are cross-border data transfers a challenge for privacy regulation?",
      vi:"Tại sao việc chuyển dữ liệu xuyên biên giới là thách thức cho quy định quyền riêng tư?",
      opts:[{k:'A',en:"They complicate the enforcement of consistent privacy protections",vi:"Chúng gây khó khăn trong việc thực thi bảo vệ quyền riêng tư nhất quán"},{k:'B',en:"They reduce the amount of data companies can collect",vi:"Chúng giảm lượng dữ liệu công ty có thể thu thập"},{k:'C',en:"They restrict international communication",vi:"Chúng hạn chế giao tiếp quốc tế"},{k:'D',en:"They simplify user consent requirements",vi:"Chúng đơn giản hóa yêu cầu đồng ý của người dùng"}],
      ans:'A', exp:`Khi dữ liệu di chuyển qua biên giới, <strong>xung đột giữa các hệ thống pháp luật khác nhau</strong> làm khó việc áp dụng một tiêu chuẩn bảo vệ nhất quán — điều này là lý do GDPR có quy định nghiêm ngặt về chuyển dữ liệu ra ngoài EU.` },
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
  document.getElementById('ppct-'  + t).textContent    = pct + '%';
  document.getElementById('pfill-' + t).style.width    = pct + '%';
  document.getElementById('qnum-'  + t).textContent    = `CÂU ${String(s.cur + 1).padStart(2, '0')}`;
  document.getElementById('qen-'   + t).textContent    = q.en;
  document.getElementById('qvi-'   + t).textContent    = q.vi;

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
  card.style.animation = 'none';
  card.offsetHeight; // reflow
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
    if (k === q.ans)          b.classList.add('correct');
    else if (k === key && !isOK) b.classList.add('wrong');
    else                      b.classList.add('dimmed');
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
function nextQ(t) {
  state[t].cur++;
  loadQ(t);
}

// ============================================================
// MÀN HÌNH KẾT QUẢ
// ============================================================
function showFinal(t) {
  document.getElementById('card-' + t).style.display = 'none';
  const s     = state[t];
  const total = QDB[t].length;
  const pct   = Math.round(s.correct / total * 100);
  document.getElementById('pfill-' + t).style.width    = '100%';
  document.getElementById('ppct-'  + t).textContent    = '100%';
  document.getElementById('fg-'    + t).textContent    = pct + '%';
  document.getElementById('fsc-'   + t).textContent    = s.correct;
  document.getElementById('fsw-'   + t).textContent    = s.wrong;
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
  document.getElementById('cnt-' + t).textContent = QDB[t].length;
  document.getElementById('sr-'  + t).textContent = QDB[t].length;
});
buildOverview();
