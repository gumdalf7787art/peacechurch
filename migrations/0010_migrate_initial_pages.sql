-- Migrate initial static pages into the subpages table

-- Education Pages
INSERT INTO subpages (slug, menu_id, title, subtitle, banner_image, content, is_published) VALUES
('kids', 14, '유초등부', '말씀 안에서 쑥쑥 자라나는 다음 세대', '', '
<div>
  <div class="bg-[#f8fafc] border-l-[4px] border-[#cc0000] p-4 md:py-6 md:px-8 rounded-r-lg mb-8 md:mb-10 shadow-[0_2px_4px_rgba(0,0,0,0.02)]">
    <h3 class="text-[20px] md:text-[24px] font-bold text-[#111] mb-1 md:mb-2 m-0">유초등부</h3>
    <p class="text-[13px] md:text-[15px] text-[#555] m-0">말씀 안에서 쑥쑥 자라나는 다음 세대</p>
  </div>
  <div class="flex flex-col md:flex-row bg-white border border-[#eee] rounded-[16px] overflow-hidden shadow-[0_10px_20px_-5px_rgba(0,0,0,0.05)] mb-8 md:mb-12 gap-0 md:gap-8">
    <div class="w-full md:w-[45%] shrink-0">
      <div class="w-full h-[200px] md:h-full md:min-h-[260px] bg-cover bg-center" style="background-image: url(''https://images.unsplash.com/photo-1519340333755-56e9c1d04079?w=800&q=80'');"></div>
    </div>
    <div class="flex-1 flex flex-col justify-center p-6 md:py-8 md:pr-8 md:pl-0">
      <h4 class="text-[18px] md:text-[20px] font-bold text-[#cc0000] mb-3 md:mb-4 m-0">사역 소개</h4>
      <div class="text-[14px] md:text-[15px] text-[#444] leading-[1.8] break-keep">
        평화교회 유초등부는 어린이들이 하나님의 사랑을 배우고, 예수님의 성품을 닮아가는 건강한 공동체입니다. <br/><br/>
        매주 신나는 찬양과 재미있는 성경 이야기, 그리고 다양한 공과 활동을 통해 믿음의 기초를 튼튼하게 다집니다.
      </div>
    </div>
  </div>
</div>', 1),

('youth', 15, '중고등부', '세상의 빛과 소금으로 세워지는 청소년', '', '
<div>
  <div class="bg-[#f8fafc] border-l-[4px] border-[#cc0000] p-4 md:py-6 md:px-8 rounded-r-lg mb-8 md:mb-10 shadow-[0_2px_4px_rgba(0,0,0,0.02)]">
    <h3 class="text-[20px] md:text-[24px] font-bold text-[#111] mb-1 md:mb-2 m-0">중고등부</h3>
    <p class="text-[13px] md:text-[15px] text-[#555] m-0">세상의 빛과 소금으로 세워지는 청소년</p>
  </div>
  <div class="flex flex-col md:flex-row bg-white border border-[#eee] rounded-[16px] overflow-hidden shadow-[0_10px_20px_-5px_rgba(0,0,0,0.05)] mb-8 md:mb-12 gap-0 md:gap-8">
    <div class="w-full md:w-[45%] shrink-0">
      <div class="w-full h-[200px] md:h-full md:min-h-[260px] bg-cover bg-center" style="background-image: url(''https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&q=80'');"></div>
    </div>
    <div class="flex-1 flex flex-col justify-center p-6 md:py-8 md:pr-8 md:pl-0">
      <h4 class="text-[18px] md:text-[20px] font-bold text-[#cc0000] mb-3 md:mb-4 m-0">사역 소개</h4>
      <div class="text-[14px] md:text-[15px] text-[#444] leading-[1.8] break-keep">
        사춘기의 고민과 학업의 부담 속에서도 하나님 안에서 참된 비전을 발견하도록 돕습니다. <br/><br/>
        진실한 예배와 깊이 있는 제자훈련을 통해 세상을 이길 믿음의 세대로 양육합니다.
      </div>
    </div>
  </div>
</div>', 1),

('young-adult', 16, '청년부', '진리와 사랑으로 하나 되는 청년 공동체', '', '
<div>
  <div class="bg-[#f8fafc] border-l-[4px] border-[#cc0000] p-4 md:py-6 md:px-8 rounded-r-lg mb-8 md:mb-10 shadow-[0_2px_4px_rgba(0,0,0,0.02)]">
    <h3 class="text-[20px] md:text-[24px] font-bold text-[#111] mb-1 md:mb-2 m-0">청년부</h3>
    <p class="text-[13px] md:text-[15px] text-[#555] m-0">진리와 사랑으로 하나 되는 청년 공동체</p>
  </div>
  <div class="flex flex-col md:flex-row bg-white border border-[#eee] rounded-[16px] overflow-hidden shadow-[0_10px_20px_-5px_rgba(0,0,0,0.05)] mb-8 md:mb-12 gap-0 md:gap-8">
    <div class="w-full md:w-[45%] shrink-0">
      <div class="w-full h-[200px] md:h-full md:min-h-[260px] bg-cover bg-center" style="background-image: url(''https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80'');"></div>
    </div>
    <div class="flex-1 flex flex-col justify-center p-6 md:py-8 md:pr-8 md:pl-0">
      <h4 class="text-[18px] md:text-[20px] font-bold text-[#cc0000] mb-3 md:mb-4 m-0">사역 소개</h4>
      <div class="text-[14px] md:text-[15px] text-[#444] leading-[1.8] break-keep">
        열정적으로 하나님을 예배하며, 일상 속에서 그리스도의 향기를 발하는 청년부입니다. <br/><br/>
        서로의 삶을 나누는 소그룹 모임과 국내외 선교 활동을 통해 실천하는 신앙을 배웁니다.
      </div>
    </div>
  </div>
</div>', 1),

('womens', 17, '여선교회', '기도와 섬김으로 교회를 세우는 어머니들의 모임', '', '
<div>
  <div class="bg-[#f8fafc] border-l-[4px] border-[#cc0000] p-4 md:py-6 md:px-8 rounded-r-lg mb-8 md:mb-10 shadow-[0_2px_4px_rgba(0,0,0,0.02)]">
    <h3 class="text-[20px] md:text-[24px] font-bold text-[#111] mb-1 md:mb-2 m-0">여선교회</h3>
    <p class="text-[13px] md:text-[15px] text-[#555] m-0">기도와 섬김으로 교회를 세우는 어머니들의 모임</p>
  </div>
  <div class="flex flex-col md:flex-row bg-white border border-[#eee] rounded-[16px] overflow-hidden shadow-[0_10px_20px_-5px_rgba(0,0,0,0.05)] mb-8 md:mb-12 gap-0 md:gap-8">
    <div class="w-full md:w-[45%] shrink-0">
      <div class="w-full h-[200px] md:h-full md:min-h-[260px] bg-cover bg-center" style="background-image: url(''https://images.unsplash.com/photo-1573165231977-3f0e27806045?w=800&q=80'');"></div>
    </div>
    <div class="flex-1 flex flex-col justify-center p-6 md:py-8 md:pr-8 md:pl-0">
      <h4 class="text-[18px] md:text-[20px] font-bold text-[#cc0000] mb-3 md:mb-4 m-0">사역 소개</h4>
      <div class="text-[14px] md:text-[15px] text-[#444] leading-[1.8] break-keep">
        교회의 든든한 기도의 기둥이자, 소외된 이웃을 향한 따뜻한 섬김을 실천하는 여선교회입니다. <br/><br/>
        정기적인 기도 모임과 다양한 구제 활동, 교회 내 행사 지원 등을 통해 그리스도의 사랑을 나눕니다.
      </div>
    </div>
  </div>
</div>', 1),

('mens', 18, '남선교회', '말씀 위에 굳게 서서 헌신하는 아버지들의 공동체', '', '
<div>
  <div class="bg-[#f8fafc] border-l-[4px] border-[#cc0000] p-4 md:py-6 md:px-8 rounded-r-lg mb-8 md:mb-10 shadow-[0_2px_4px_rgba(0,0,0,0.02)]">
    <h3 class="text-[20px] md:text-[24px] font-bold text-[#111] mb-1 md:mb-2 m-0">남선교회</h3>
    <p class="text-[13px] md:text-[15px] text-[#555] m-0">말씀 위에 굳게 서서 헌신하는 아버지들의 공동체</p>
  </div>
  <div class="flex flex-col md:flex-row bg-white border border-[#eee] rounded-[16px] overflow-hidden shadow-[0_10px_20px_-5px_rgba(0,0,0,0.05)] mb-8 md:mb-12 gap-0 md:gap-8">
    <div class="w-full md:w-[45%] shrink-0">
      <div class="w-full h-[200px] md:h-full md:min-h-[260px] bg-cover bg-center" style="background-image: url(''https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80'');"></div>
    </div>
    <div class="flex-1 flex flex-col justify-center p-6 md:py-8 md:pr-8 md:pl-0">
      <h4 class="text-[18px] md:text-[20px] font-bold text-[#cc0000] mb-3 md:mb-4 m-0">사역 소개</h4>
      <div class="text-[14px] md:text-[15px] text-[#444] leading-[1.8] break-keep">
        가정과 교회의 영적 리더로서 든든히 서가기 위해 함께 모여 말씀을 나누고 기도하는 남선교회입니다. <br/><br/>
        교회의 굵직한 사역들을 앞장서서 감당하며, 지역 사회를 위한 봉사와 선교 활동에 힘쓰고 있습니다.
      </div>
    </div>
  </div>
</div>', 1),

-- About Pages
('pastor', 3, '담임목사 소개', '', '', '
<div style="display: flex; flex-direction: column; gap: 48px;">
  <div style="text-align: center; margin-bottom: 10px;">
    <h3 style="font-size: 28px; font-weight: 800; color: #111; margin-bottom: 16px; line-height: 1.4;">
      "그리스도의 평화가 머무는 교회,<br/>세상에 그 평화를 전하는 교회"
    </h3>
  </div>
  <div style="display: flex; gap: 50px; align-items: flex-start; flex-wrap: wrap;">
    <div style="flex: 0 0 320px; display: flex; flex-direction: column; gap: 24px;">
      <div style="width: 100%; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.1);">
        <img src="/pastor-profile.jpg" alt="장성진 담임목사" style="width: 100%; height: auto; display: block;" />
      </div>
      <div style="background-color: #f8f9fa; padding: 24px; border-radius: 12px; border: 1px solid #eee;">
        <h4 style="font-size: 18px; font-weight: bold; color: #222; border-bottom: 2px solid #cc0000; padding-bottom: 12px; margin-bottom: 16px;">PROFILE</h4>
        <div style="font-size: 15px; color: #444; line-height: 1.8;">
          <div style="font-weight: bold; font-size: 16px; color: #111; margin-bottom: 12px;">장성진 담임목사</div>
          <ul style="padding-left: 20px; margin: 0; display: flex; flex-direction: column; gap: 8px; color: #555;">
            <li>감리교신학교 신학과 졸업</li>
            <li>감리교신학교 대학원 졸업 (조직신학 전공)</li>
            <li>Wesley University of Washington D.C.<br/><span style="font-size: 13px; color: #888;">D.Min. Asian Track (2011–2013)</span></li>
            <li>필리핀 이주 노동자 목회 (2004–현재)</li>
            <li>평화감리교회 담임 (2016–현재)</li>
          </ul>
        </div>
      </div>
    </div>
    <div style="flex: 1; min-width: 300px; font-size: 16px; color: #333; line-height: 1.9; word-break: keep-all;">
      <p style="margin-bottom: 20px;">
        평화교회 홈페이지를 찾아주신 여러분을 주님의 이름으로 환영합니다.<br/>
        평화교회를 섬기고 있는 담임목사 <strong style="color: #111;">장성진</strong>입니다.
      </p>
      <p style="margin-bottom: 20px;">
        교회는 단순히 사람들이 모여 예배드리는 장소가 아니라, 하나님의 사랑을 배우고 그 사랑을 삶으로 살아내는 공동체라고 믿습니다.
      </p>
      <p style="margin-bottom: 20px;">
        저는 목회의 길을 걸어오면서 다양한 삶의 자리에서 사람들을 만나왔습니다. 특히 2004년부터 필리핀 이주 노동자들을 섬기며, 낯선 땅에서 살아가는 이들의 기쁨과 아픔, 외로움과 소망을 가까이에서 함께해 왔습니다.
      </p>
      <p style="margin-bottom: 20px;">
        그 시간을 통해 한 가지를 더욱 깊이 깨닫게 되었습니다.
      </p>
      <div style="padding: 24px; background-color: #fff; border-left: 4px solid #cc0000; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); margin-bottom: 24px; font-size: 17px; font-weight: 600; color: #111;">
        복음은 말에만 머무는 것이 아니라 한 사람의 삶 곁으로 다가가 함께 울고, 함께 기뻐하며, 함께 걸어가는 사랑이어야 한다는 것입니다.
      </div>
      <p style="margin-bottom: 20px;">
        2016년부터 평화교회를 섬기면서도 이 마음을 잊지 않으려고 노력해 왔습니다.
      </p>
      <p style="margin-bottom: 20px;">
        우리 교회가 예배의 기쁨이 살아 있는 교회, 말씀을 통해 삶의 방향을 발견하는 교회, 다음 세대가 믿음 안에서 꿈을 키우는 교회가 되기를 소망합니다. 또한 교회 안에만 머무르지 않고 이웃의 아픔을 돌아보며, 지역사회와 세상을 향해 예수 그리스도의 사랑과 평화를 나누는 교회가 되기를 기도합니다.
      </p>
      <p style="margin-bottom: 20px;">
        신앙생활을 처음 시작하시는 분도, 오랫동안 교회를 떠나 계셨던 분도, 삶의 어려움 가운데 위로와 새로운 길을 찾고 계신 분도 평화교회에서는 모두 소중한 한 사람입니다.
      </p>
      <p style="margin-bottom: 20px;">
        누구든 편안한 마음으로 찾아오십시오.<br/>
        함께 예배하고, 함께 말씀을 배우며, 서로의 삶을 나누면서 하나님께서 우리에게 허락하신 믿음의 길을 함께 걸어가고 싶습니다.
      </p>
      <p style="margin-bottom: 32px;">
        평화교회가 여러분의 삶에 따뜻한 쉼이 되고, 다시 일어설 수 있는 소망이 되며, 하나님의 평화를 세상으로 전하는 믿음의 공동체가 되기를 소망합니다.<br/><br/>
        여러분과 평화교회에서 만나 뵙기를 기다리겠습니다.<br/>
        하나님의 은혜와 평화가 여러분의 가정과 삶 가운데 늘 함께하시기를 기도합니다.
      </p>
      <div style="text-align: right; font-size: 18px; font-weight: bold; color: #111;">
        평화교회 담임목사 장 성 진 드림
      </div>
    </div>
  </div>
</div>', 1),

('offering', 7, '온라인 헌금안내', '', '', '
<div>
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 32px;">
    <h3 style="font-size: 22px; font-weight: 700; color: #222; border-left: 4px solid #cc0000; padding-left: 12px;">온라인 헌금안내</h3>
  </div>
  <div style="position: relative; width: 100%; padding: 80px 20px; border-radius: 16px; overflow: hidden; display: flex; align-items: center; justify-content: center; min-height: 480px;">
    <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background-image: url(''https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070&auto=format&fit=crop''); background-size: cover; background-position: center; filter: brightness(0.5);"></div>
    <div style="position: relative; z-index: 1; background-color: #fff; padding: 48px 40px; border-radius: 16px; box-shadow: 0 20px 40px rgba(0,0,0,0.2); text-align: center; max-width: 480px; width: 100%;">
      <div style="font-size: 14px; color: #cc0000; font-weight: bold; margin-bottom: 16px; letter-spacing: 3px;">OFFERING</div>
      <h4 style="font-size: 28px; font-weight: bold; color: #111; margin-bottom: 24px; line-height: 1.4;">
        마음을 담아 드리는<br/>온라인 헌금 안내
      </h4>
      <div style="width: 40px; height: 3px; background-color: #cc0000; margin: 0 auto 32px auto;"></div>
      <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; padding: 28px; border-radius: 12px; margin-bottom: 24px;">
        <div style="font-size: 15px; color: #64748b; margin-bottom: 8px; font-weight: 500;">농협은행</div>
        <div style="font-size: 26px; font-weight: bold; color: #0f172a; letter-spacing: 1px;">123-4567-8901-23</div>
        <div style="font-size: 15px; color: #475569; margin-top: 12px;">예금주 : 평화교회</div>
      </div>
      <p style="font-size: 14px; color: #64748b; line-height: 1.6; word-break: keep-all;">
        * 헌금 송금 시 이름과 헌금 종류<br/>(예: 홍길동십일조)를 꼭 기재해 주시기 바랍니다.
      </p>
    </div>
  </div>
</div>', 1),

('facility', 8, '시설안내', '', '', '
<div>
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 32px;">
    <h3 style="font-size: 22px; font-weight: 700; color: #222; border-left: 4px solid #cc0000; padding-left: 12px;">층별 시설안내</h3>
  </div>
  <div style="border-top: 2px solid #333;">
    <div style="display: flex; border-bottom: 1px solid #e5e7eb; padding: 36px 0; align-items: center;">
      <div style="width: 140px; flex-shrink: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; border-right: 2px dashed #e2e8f0; padding-right: 32px; margin-right: 40px;">
        <span style="font-size: 36px; font-weight: 900; color: #cc0000; letter-spacing: 2px;">4F</span>
        <span style="font-size: 13px; color: #94a3b8; margin-top: 4px;">FLOOR</span>
      </div>
      <div style="flex: 1;">
        <h4 style="font-size: 20px; font-weight: bold; color: #111; margin-bottom: 12px;">청소년실 / 하늘정원</h4>
        <p style="font-size: 15px; color: #555; line-height: 1.6; word-break: keep-all; margin: 0;">중·고등부 예배실 및 다음 세대를 위한 야외 휴게 옥상 정원입니다.</p>
      </div>
    </div>
    <div style="display: flex; border-bottom: 1px solid #e5e7eb; padding: 36px 0; align-items: center;">
      <div style="width: 140px; flex-shrink: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; border-right: 2px dashed #e2e8f0; padding-right: 32px; margin-right: 40px;">
        <span style="font-size: 36px; font-weight: 900; color: #cc0000; letter-spacing: 2px;">3F</span>
        <span style="font-size: 13px; color: #94a3b8; margin-top: 4px;">FLOOR</span>
      </div>
      <div style="flex: 1;">
        <h4 style="font-size: 20px; font-weight: bold; color: #111; margin-bottom: 12px;">비전홀 / 유아실</h4>
        <p style="font-size: 15px; color: #555; line-height: 1.6; word-break: keep-all; margin: 0;">유치·아동부 예배 및 다양한 모임이 진행되며, 영유아를 동반한 부모님들을 위한 쾌적한 유아실이 마련되어 있습니다.</p>
      </div>
    </div>
    <div style="display: flex; border-bottom: 1px solid #e5e7eb; padding: 36px 0; align-items: center;">
      <div style="width: 140px; flex-shrink: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; border-right: 2px dashed #e2e8f0; padding-right: 32px; margin-right: 40px;">
        <span style="font-size: 36px; font-weight: 900; color: #cc0000; letter-spacing: 2px;">2F</span>
        <span style="font-size: 13px; color: #94a3b8; margin-top: 4px;">FLOOR</span>
      </div>
      <div style="flex: 1;">
        <h4 style="font-size: 20px; font-weight: bold; color: #111; margin-bottom: 12px;">소예배실 / 목양실 / 교역자실</h4>
        <p style="font-size: 15px; color: #555; line-height: 1.6; word-break: keep-all; margin: 0;">새벽기도회 및 소규모 집회가 열리는 소예배실과, 담임목사님 집무실 및 교역자 사무 공간입니다.</p>
      </div>
    </div>
    <div style="display: flex; border-bottom: 1px solid #e5e7eb; padding: 36px 0; align-items: center;">
      <div style="width: 140px; flex-shrink: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; border-right: 2px dashed #e2e8f0; padding-right: 32px; margin-right: 40px;">
        <span style="font-size: 36px; font-weight: 900; color: #cc0000; letter-spacing: 2px;">1F</span>
        <span style="font-size: 13px; color: #94a3b8; margin-top: 4px;">FLOOR</span>
      </div>
      <div style="flex: 1;">
        <h4 style="font-size: 20px; font-weight: bold; color: #111; margin-bottom: 12px;">로비 / 사무실 / 카페 만남</h4>
        <p style="font-size: 15px; color: #555; line-height: 1.6; word-break: keep-all; margin: 0;">교회 출입구이자 성도들의 따뜻한 친교 공간인 카페, 그리고 행정 업무를 지원하는 사무실이 있습니다.</p>
      </div>
    </div>
    <div style="display: flex; border-bottom: 1px solid #e5e7eb; padding: 36px 0; align-items: center;">
      <div style="width: 140px; flex-shrink: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; border-right: 2px dashed #e2e8f0; padding-right: 32px; margin-right: 40px;">
        <span style="font-size: 36px; font-weight: 900; color: #cc0000; letter-spacing: 2px;">B1</span>
        <span style="font-size: 13px; color: #94a3b8; margin-top: 4px;">FLOOR</span>
      </div>
      <div style="flex: 1;">
        <h4 style="font-size: 20px; font-weight: bold; color: #111; margin-bottom: 12px;">글로리아홀 (본당) / 새가족실</h4>
        <p style="font-size: 15px; color: #555; line-height: 1.6; word-break: keep-all; margin: 0;">주일 대예배 및 주요 집회가 드려지는 웅장하고 은혜로운 본당 공간과 새가족을 환영하는 곳입니다.</p>
      </div>
    </div>
    <div style="display: flex; border-bottom: 1px solid #e5e7eb; padding: 36px 0; align-items: center;">
      <div style="width: 140px; flex-shrink: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; border-right: 2px dashed #e2e8f0; padding-right: 32px; margin-right: 40px;">
        <span style="font-size: 36px; font-weight: 900; color: #cc0000; letter-spacing: 2px;">B2</span>
        <span style="font-size: 13px; color: #94a3b8; margin-top: 4px;">FLOOR</span>
      </div>
      <div style="flex: 1;">
        <h4 style="font-size: 20px; font-weight: bold; color: #111; margin-bottom: 12px;">주차장 / 기계실</h4>
        <p style="font-size: 15px; color: #555; line-height: 1.6; word-break: keep-all; margin: 0;">성도님들의 편리한 주차를 돕는 넓은 지하 주차 공간입니다.</p>
      </div>
    </div>
  </div>
</div>', 1);
