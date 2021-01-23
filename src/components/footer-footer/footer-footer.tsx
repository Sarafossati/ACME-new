import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'footer-footer',
  styleUrl: 'footer-footer.css',
  shadow: true,
})
export class FooterFooter implements ComponentInterface {

  render() {
    return (
     
      <p>
                Copyright © ACME SERVIZI FINANZIARI E ASSICURATIVI S.R.L.
                <br></br>
                Tutti i diritti sono riservati.P.IVA\C.F. 01234567890 - Iscr. REA PA - 123456 - OAM M441 - IVASS RUI E000563270 - Cap. Sociale 50.000,00 Euro i.v.
                <br></br>
                Sede Legale: Milano - Via Ventura, 5 - 20134 - Tel. 02 3651 3670 -
                <br></br>
                Fax 0236513670
                <br></br>
                Sede Amministrativa: Milano - Via Ventura, 5 - 20134 - Tel. 02 3651 3670 -
                <br></br>
                <br></br>
                <a href="#">About us</a> | <a href="#">Lavora con noi</a> | <a href="#">Privacy Policy</a> | <a href="#">Cookie</a>
        </p>
    );
  }

}
