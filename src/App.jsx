import React from 'react';
import './index.css'; // 위에서 만든 CSS 스타일을 강제로 결합합니다!

function App() {
  const diaryDate = "2026.05.07 목요일";
  const mainEmotion = "행복";
  const happinessPercent = 75;

  return (
    <div className="phone-container">
      {/* 상단바 상태 표시 흉내 */}
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 24px 0', fontSize: '14px', fontWeight: '600', color: '#4b5563' }}>
        <span>9:41</span>
        <span>📶 🔋</span>
      </div>

      <div className="header">InnerNote</div>

      <div className="tab-container">
        <button className="tab-active">일별</button>
        <button className="tab-inactive">주별</button>
        <button className="tab-inactive">월별</button>
      </div>

      <div className="content">
        <div className="date-selector">
          <button style={{ background: 'none', border: 'none', color: '#9ca3af', fontWeight: 'bold', cursor: 'pointer' }}>&lt;</button>
          <span>{diaryDate}</span>
          <button style={{ background: 'none', border: 'none', color: '#9ca3af', fontWeight: 'bold', cursor: 'pointer' }}>&gt;</button>
        </div>

        {/* 감정 분석 차트 */}
        <div className="chart-box">
          <div className="donut-chart" style={{ borderTopColor: '#B9A6CB' }}>
            <div className="chart-center">
              <span style={{ fontSize: '20px' }}>🤍</span>
              <span style={{ fontWeight: 'bold', fontSize: '18px', color: '#1f2937' }}>{mainEmotion}</span>
              <span style={{ fontSize: '12px', color: '#6b7280' }}>{happinessPercent}%</span>
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '8px', marginTop: '16px', fontSize: '12px', color: '#4b5563' }}>
            <span><span style={{ display: 'inline-block', width: '12px', height: '12px', backgroundColor: '#FDF0E6', borderRadius: '50%', marginRight: '4px' }}></span>행복</span>
            <span><span style={{ display: 'inline-block', width: '12px', height: '12px', backgroundColor: '#B9A6CB', borderRadius: '50%', marginRight: '4px' }}></span>슬픔</span>
          </div>
        </div>

        {/* 맞춤형 추천 구역 */}
        <div>
          <div className="recommend-title">맞춤형 추천</div>
          
          <div className="grid-2">
            <div className="box-place">
              <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#1e40af' }}>추천 장소</span>
              <div>
                <h4 style={{ margin: 0, fontSize: '14px', color: '#1f2937' }}>조용한 카페 아늑</h4>
                <p style={{ margin: '4px 0 0', fontSize: '11px', color: '#6b7280' }}>경기 용인시 수지구</p>
              </div>
            </div>

            <div className="box-music">
              <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#6b21a8' }}>오늘의 플레이리스트</span>
              <div style={{ fontSize: '12px', color: '#374151', lineHeight: '1.5' }}>
                <div>▶ 조용한 피아노 선율</div>
                <div>▶ 힐링 플레이리스트</div>
              </div>
            </div>
          </div>

          <div className="box-mission">
            <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#065f46', display: 'block', marginBottom: '4px' }}>오늘의 미션 추천</span>
            <p style={{ margin: 0, fontSize: '12px', color: '#374151', fontWeight: '500' }}>오늘 하루 나에게 '고생했어'라고 한 마디 말해주기</p>
          </div>
        </div>
      </div>

      {/* 하단 탭바 */}
      <div className="bottom-nav">
        <button style={{ background: 'none', border: 'none', fontSize: '20px', color: '#9ca3af' }}>🧭</button>
        <button style={{ background: 'none', border: 'none', fontSize: '20px', color: '#1f2937', fontWeight: 'bold' }}>🏠</button>
        <button style={{ background: 'none', border: 'none', fontSize: '20px', color: '#9ca3af' }}>👤</button>
      </div>
    </div>
  );
}

export default App;