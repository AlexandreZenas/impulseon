import './index.css';

export function  ButtonCta() {

  function clickAds(){
    return gtag_report_conversion('https://wa.me/5521986465148');
  }
  return (
    <div className='wrapper-buttonCta'>
        <a onClick={clickAds} href="https://wa.me/5521986465148" target='_blanc'>
          <span>SOLICITAR ORÇAMENTO</span>
        </a>
    </div>
  )

}