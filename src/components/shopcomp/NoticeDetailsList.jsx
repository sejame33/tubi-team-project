import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./NoticeDetailsList.css";

const noticeData = {
  1: {
    title: "Hebi 싱글 앨범 ‘늘 (EVER)’ 구매자 이벤트 당첨자 발표",
    date: "2026.01.12 · 12:30",
    intro: [
      "안녕하세요.",
      "주식회사 스노우비엔터테인먼트입니다.\nHebi 싱글앨범 ‘늘 (EVER)’ 구매자 이벤트에 참여해 주신 모든 분들께 감사드리며, 당첨자를 발표합니다.",
    ],
  },
  2: {
    title: "Nova X Kakao Pay 추가 적립 안내",
    date: "2026.01.12 · 10:00",
    intro: [
      "안녕하세요.",
      "Nova 결제 고객님께 Kakao Pay 결제시 추가 적립 이벤트를 안내드립니다.",
    ],
  },
  3: {
    title: "IRISÉ ‘WINGS’ 발매 기념 스트리밍",
    date: "2026.01.11 · 18:00",
    intro: ["안녕하세요.", "IRISÉ 스트리밍 미션 이벤트 안내입니다."],
  },
  4: {
    title: "PLAVE 2주년 한정 굿즈 사전예약",
    date: "2026.01.10 · 15:00",
    intro: ["안녕하세요.", "PLAVE 2주년 한정 굿즈 사전예약 안내입니다."],
  },
};

const NoticeDetailsList = () => {
  const navigate = useNavigate();
  const { noticeId } = useParams();
  const data = noticeData[noticeId];

  if (!data) {
    return (
      <>
        <div className="notice-error-message">
          <img src="/img/chat-error-tubi.svg" alt="" />
          <p className="notice-error-title">
            현재 해당 페이지를
            <br />
            찾을 수 없어요
          </p>
          <p className="notice-error-text">나중에 다시 시도해주세요</p>
        </div>

        <div className="notice-error-btn-wrap">
          <button className="notice-error-btn" onClick={() => navigate(-1)}>
            다시 돌아가기
          </button>
        </div>
      </>
    );
  }

  return (
    <div className="notice-detail">
      {/* ✅ id 기반으로 바뀌는 영역 */}
      <h2 className="notice-title">{data.title}</h2>
      <div className="notice-date">{data.date}</div>

      <section className="notice-section">
        {data.intro.map((text, i) => (
          <p key={i}>
            {text.split("\n").map((line, idx) => (
              <span key={idx}>
                {line}
                <br />
              </span>
            ))}
          </p>
        ))}
      </section>

      {/* =========================
          ⛔ 아래부터는 네가 만든 UI 그대로
          ========================= */}

      <section className="notice-section ma-b-30">
        <h3>
          <img src="/img/noticedetail-trophy.svg" alt="" />{" "}
          <span>당첨자 목록</span>
        </h3>
        <div className="notice-table-wrap">
          <table className="notice-table">
            <thead>
              <tr>
                <th>등수</th>
                <th>닉네임</th>
                <th>아이디</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1등</td>
                <td>star_hebi</td>
                <td>hebi***21</td>
              </tr>
              <tr>
                <td>2등</td>
                <td>everluv</td>
                <td>ever***88</td>
              </tr>
              <tr>
                <td>3등</td>
                <td>cloud_o</td>
                <td>cld***07</td>
              </tr>
              <tr>
                <td>4등</td>
                <td>bluefox</td>
                <td>blu***55</td>
              </tr>
              <tr>
                <td>5등</td>
                <td>mintday</td>
                <td>min***32</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="notice-warning">
          *개인정보 보호를 위해 일부 정보는 마스킹 처리 되었습니다.
        </p>
      </section>

      <section className="notice-section">
        <h3>
          <img src="/img/noticedetail-giftbox.svg" alt="" />
          <span>경품 안내</span>
        </h3>
        <div className="notice-goods-wrap">
          <table className="notice-goods">
            <thead>
              <tr>
                <th>등수</th>
                <th>경품</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1등</td>
                <td>Hebi 친필 사인 앨범 & Hebi 미공개 포토카드 세트</td>
              </tr>
              <tr>
                <td>2등</td>
                <td>Hebi 미공개 포토카드 세트</td>
              </tr>
              <tr>
                <td>3등</td>
                <td>Hebi 한정 포스터</td>
              </tr>
              <tr>
                <td>4등</td>
                <td>디지털 포토북</td>
              </tr>
              <tr>
                <td>5등</td>
                <td>Hebi 리미티드 아이콘 세트</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="notice-congraution">
          당첨을 진심으로 축하드리며, 당첨자는 아래의 당첨자 안내 사항을 확인한
          후, 안내된 양식에 맞춰 신청 바랍니다.
        </p>
      </section>

      <section className="notice-section">
        <h4>[수령 정보 입력 기간]</h4>
        <p className="notice-date-range">2026.01.12 ~ 2026.01.26 23:59</p>

        <h4>[당첨자 입력 방법]</h4>
        <p className="notice-input-method">
          앱 → 마이페이지 → 이벤트 → ‘늘 (EVER) 당첨자 정보 입력’ 기한 내 미입력
          시 당첨이 <span>자동 취소</span>됩니다.
        </p>

        <h4>[개인정보 수집·이용 안내]</h4>
        <p className="notice-note">
          수집 주체 : Hebi Official <br />
          수집 목적 : 이벤트 당첨자 경품 발송 <br />
          수집 항목 : 성명, 닉네임, 연락처, 배송주소 <br />
          보유 및 이용 기간 : 경품 발송 완료 후 즉시 파기
          <br />※ 개인정보 제공에 동의하지 않을 경우 경품 발송이 불가합니다
        </p>

        <h4>[유의사항]</h4>
        <p className="notice-note">
          경품은 입력된 배송 정보를 기준으로 발송됩니다. <br />
          잘못된 정보 입력 시 재발송이 불가합니다. <br />
          디지털 경품은 계정으로 자동 지급됩니다. <br />
          이벤트 관련 문의는 앱 내 1:1 문의를 이용해 주세요.
        </p>

        <p className="last-thank">감사합니다.</p>
      </section>
    </div>
  );
};

export default NoticeDetailsList;
