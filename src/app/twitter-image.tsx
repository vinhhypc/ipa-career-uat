import { ImageResponse } from 'next/og';

export const size = {
  width: 1200,
  height: 600,
};

export const contentType = 'image/png';

export default function TwitterImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 64,
        background: 'linear-gradient(135deg, #002B5B 0%, #2480CC 100%)',
        color: '#ffffff',
      }}
    >
      <div style={{ fontSize: 32, fontWeight: 600, letterSpacing: 2 }}>IPAG CAREER</div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: 18,
          fontSize: 56,
          fontWeight: 800,
          lineHeight: 1.08,
        }}
      >
        Khai phóng năng lực,
        <br />
        kiến tạo giá trị bền vững
      </div>
    </div>,
    {
      ...size,
    },
  );
}
