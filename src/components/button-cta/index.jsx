import './index.css';

export function  ButtonCta() {

  function clickAds(){
    return gtag_report_conversion(`https://wa.me/5521986465148 `);
  }
  return (
        <a className='buttonCta' onClick={clickAds}>
          <span>SOLICITAR ORÇAMENTO</span>
        </a>
  )

}