import '../Styles/Certificates.css'
import '../App.css/'

const Certificates = () => {
  return (
    <div className="cert-container" id="cert">
      <h1>Certifications</h1>
      <ol className="card-olcards">
        <li className="card-li" style={{ '--cardColor': '#06c232ff' }}>
          <div className="card-content">
            <div className="card-icon">🥈</div>
            <div className="card-title">  Merit certificate </div>
            <div className="card-text">Earned a merit certificate in ”Code Mania” at my College
              <a class="view-button" href="https://drive.google.com/file/d/13tYQ0uIrz1M9Im0tCb8sN61nM0c2nRr5/view?usp=drive_link" target="_blank">
                <span class="icon">👁️</span> View
              </a>

            </div>
          </div>
        </li>
        <li className="card-li" style={{ '--cardColor': '#fc374e' }}>
          <div className="card-content">
            <div className="card-icon">🎖️</div>
            <div className="card-title"> Coursera </div>
            <div className="card-text">Introduction to Front-End Development  — Issued: 17 Mar 2025

              <a class="view-button" href="https://drive.google.com/file/d/1Yx0f5Q68_LT7Hn_vyvo3PdIA5xI2DoyE/view?usp=drive_link" target="_blank">
                <span class="icon">👁️</span> View
              </a>


            </div>
          </div>
        </li>
        <li className="card-li" style={{ '--cardColor': '#36aeb3' }}>
          <div className="card-content">
            <div className="card-icon">🧾</div>
            <div className="card-title">Coursera</div>
            <div className="card-text"> Introduction to Backend-End Development — Issued: 03 Apr 2025

              <a class="view-button" href="https://drive.google.com/file/d/1Yx0f5Q68_LT7Hn_vyvo3PdIA5xI2DoyE/view?usp=drive_link" target="_blank">
                <span class="icon">👁️</span> View
              </a>

             </div>
          </div>
        </li>
        <li className="card-li" style={{ '--cardColor': '#162d59' }}>
          <div className="card-content">
            <div className="card-icon">🔥</div>
            <div className="card-title">Solo Learn </div>
            <div className="card-text"> Web Development — Issued: 17 Mar 2025

              <a class="view-button" href="https://drive.google.com/file/d/124fmInGP1lt19WR45cGqkQxXp4jyxdKn/view?usp=drive_link" target="_blank">
                <span class="icon">👁️</span> View
              </a>

             </div>
          </div>
        </li>
        <li className="card-li" style={{ '--cardColor': '#f15f0e' }}>
          <div className="card-content">
            <div className="card-icon">🤝</div>
            <div className="card-title">Solo Learn </div>
            <div className="card-text"> Introduction to Java  — Issued: 26 Aug 2024.

              <a class="view-button" href="https://drive.google.com/file/d/10p2XJbJK-yCKWXXZw8Zm33B4vx_b3R2Y/view?usp=drive_link" target="_blank">
                <span class="icon">👁️</span> View
              </a>

              </div>
          </div>

        </li>
        <li className="card-li" style={{ '--cardColor': '#06955cff' }}>
          <div className="card-content">
            <div className="card-icon">🥉</div>
            <div className="card-title"> Excelr </div>
            <div className="card-text"> DSA for Campus Placements  — Issued: 6 Sep 2024.

              <a class="view-button" href="https://drive.google.com/file/d/1CjgXDyVAxrAw5yfYFwI1gWr87VdaD4Dt/view?usp=drive_link" target="_blank">
                <span class="icon">👁️</span> View
              </a>

             </div>
          </div>

        </li>
        <li className="card-li" style={{ '--cardColor': '#88043fff' }}>
          <div className="card-content">
            <div className="card-icon">🥈</div>
            <div className="card-title">  Great Learning </div>
            <div className="card-text"> Introduction to Graphic Design with Photoshop  — Issued: Jul 2024

              <a class="view-button" href="https://drive.google.com/file/d/1msloWgdaMDL4PI3aFxMy46_S7Zs6Y0A-/view?usp=drive_link" target="_blank">
                <span class="icon">👁️</span> View
              </a>

              </div>
          </div>

        </li>
      </ol>
    </div>
  )
}

export default Certificates