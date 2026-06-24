export default function PhotoFlip() {
  return (
    <div className="photo-container" style={{flex: 1}}>
      <div className="photo-card">
        <div className="photo-face front">
          <img src="/assets/foto_1.jpg" alt="Photo 1" />
        </div>

        <div className="photo-face back">
          <img src="/assets/foto_2.jpg" alt="Photo 2" />
        </div>
      </div>
    </div>
  );
}