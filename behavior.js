document.addEventListener('DOMContentLoaded', function (event) {
  /*** apply styling to active navigation link ***/
  const path = window.location.pathname

  const navLinks = document.querySelectorAll('ul li a')
  navLinks.forEach(link => {
    if (link.getAttribute('href') === path) {
      link.classList.toggle('active')
    }
  })

  /*** make the  small images larger ***/
  let nextSize = document.getElementById('size')
  let thumbnailElement = document.getElementById('smart_thumbnail')

  // added "?." to remove error showing up on the console saying Cannot read properties of null
  thumbnailElement?.addEventListener('click', function () {
    if (thumbnailElement.className == '') {
      thumbnailElement.className = 'small'
      nextSize.textContent = 'enlarge'
    } else {
      thumbnailElement.className = ''
      nextSize.textContent = 'shrink'
    }
  })

  /**
   *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
   *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */

  var disqus_config = function () {
    this.page.url = 'https://github.com/psmacabulos/solo-project/index.html' // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = 'index' // Replace PAGE_IDENTIFIER with your page's unique identifier variable
  }

  ;(function () {
    // DON'T EDIT BELOW THIS LINE
    var d = document,
      s = d.createElement('script')
    s.src = 'https://hoberton.disqus.com/embed.js'
    s.setAttribute('data-timestamp', +new Date())
    ;(d.head || d.body).appendChild(s)
  })()

  /***  Create an alert when sending a message from the form  ***/

  const visitor = document.getElementById('name')
  const submitButton = document.querySelector('.submit-btn')

  submitButton?.addEventListener('click', function (e) {
    e.preventDefault()
    alert(
      `Hi ${
        visitor.value === '' ? 'visitor' : visitor.value.toUpperCase()
      } thanks for connecting. My form is still under construction but I would appreciate if you will leave a comment on the sidebar. Thank you!`
    )
  })
})
