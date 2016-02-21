
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
