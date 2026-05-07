import { ImageResponse } from 'next/og';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 64,
        background: 'linear-gradient(135deg, #013A72 0%, #0C71C7 70%, #F6FCFF 140%)',
        color: '#ffffff',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ fontSize: 28, fontWeight: 600, letterSpacing: 2 }}>IPAG CAREER</div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            fontSize: 64,
            fontWeight: 800,
            lineHeight: 1.05,
          }}
        >
          Khai phóng năng lực,
          <br />
          kiến tạo giá trị bền vững
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 24, opacity: 0.9 }}>
        <div>ipag-careers</div>
        <div>vi_VN</div>
      </div>
    </div>,
    {
      ...size,
    },
  );
}
