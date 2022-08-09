import React from 'react';
import "../css/footer.css";

const footer = () => {
  return (
    <div>
      <div class="footer-basic"> 
        <footer>
            <div class="social"><a href="https://www.instagram.com/"><i class="icon ion-social-instagram"></i></a><a href="https://twitter.com/?lang=en"><i class="icon ion-social-twitter"></i></a><a href="https://www.facebook.com/"><i class="icon ion-social-facebook"></i></a></div>
            <ul class="list-inline">
                <li class="list-inline-item"><a href="/">Home</a></li>
                <li class="list-inline-item"><a href="/">Terms</a></li>
                <li class="list-inline-item"><a href="/">Privacy Policy</a></li>
            </ul>
            <p class="copyright">Vudu © 2022</p>
        </footer>
    </div>
    </div>
  )
}

export default footer
