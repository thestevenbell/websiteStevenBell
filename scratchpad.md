
div.menuDrop
  ul.accordion
          li
            a(href="javascript:void(0)").js-accordion-trigger Menu Accordion
            ul.submenu
              li
                a(href="javascript:void(0)") Sub Item 1
              li
                a(href="javascript:void(0)") Sub Item 2
          li
            a(href="javascript:void(0)").js-accordion-trigger Another Item
            ul.submenu
              li
                a(href="javascript:void(0)") Sub Item 1
              li
                a(href="javascript:void(0)") Sub Item 2

////CSS
.accordion {
    margin: 0 auto;
    background-color: rgba(198, 203, 204, 0.8);
}



/// Modal

  //- div.modal
  //-   label(for="modal-1")
  //-     div.modal-trigger Click for Modal
  //-   input(type="checkbox").modal-state#modal-1
  //-   div.modal-fade-screen
  //-     div.modal-inner
  //-       div(for="modal-1").modal-close
  //-       h1 Resume
  //-       p.modal-intro  Modal text
  //-       p.modal-content Body text

//Modal

  div#resume
    h4 Resume:
    div.modal#resumeModal
      label(for="modal-7")
        div
          h4.modal-trigger view
      input(type="checkbox").modal-state#modal-7
      div.modal-fade-screen
        div.modal-inner
          div(for="modal-7").modal-close
          h3 Resume
          p.modal-intro  Modal text
          p.modal-content Body text
    a(href="./img/yourfile.pdf" download="StevenBellWebDevResume.pdf")
      h4 download
