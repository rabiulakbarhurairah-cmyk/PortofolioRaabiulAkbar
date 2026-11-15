(function(){
var r=document.documentElement,tg=document.getElementById('tg');
try{var s=localStorage.getItem('th');if(s)r.setAttribute('data-theme',s)}catch(e){}
tg.onclick=function(){var d=r.getAttribute('data-theme')||(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light'),n=d==='dark'?'light':'dark';r.setAttribute('data-theme',n);try{localStorage.setItem('th',n)}catch(e){}};
function cnt(el){var t=+el.dataset.n,p=el.dataset.p||'',f=t%1?1:0,st=performance.now();
(function f2(n){var k=Math.min((n-st)/1400,1);el.textContent=p+(t*k).toFixed(f).replace('.',',');if(k<1)requestAnimationFrame(f2)})(st)}
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;
e.target.classList.add('on');var n=e.target.querySelector('[data-n]');if(n)cnt(n);io.unobserve(e.target)})},{threshold:.2});
document.querySelectorAll('.rv,.bar').forEach(function(e){io.observe(e)});
var lb=document.getElementById('lb');
document.addEventListener('click',function(e){var i=e.target.closest&&e.target.closest('.ph img,.sv img');if(i){lb.querySelector('img').src=i.src;lb.classList.add('on')}});
lb.onclick=function(){lb.classList.remove('on')};
})();

(function(){
var A='&amp;';
var T=[
['sertifikat-ai-ambassador-trainer','AI Coding Ambassador dan Trainer','Alkademi dan Microsoft Indonesia · 2 & 7 Apr 2026 · No. 107/ALKADEMI/VI/2026'],
['sertifikat-safe-smart-pengimbas','Pengimbas Safe & Smart 2026','British Embassy Jakarta dan BerdayaBareng · 10 Okt 2026 · No. 271/BB/Sert-TT1-DAP/2026'],
['sertifikat-safe-smart-peserta','Peserta Safe & Smart 2026 (53 JP)','British Embassy Jakarta dan BerdayaBareng · 10 Okt 2026 · No. 568/BB/Sert-PT1-DAP/2026'],
['sertifikat-webinar-quality-education','Webinar Internasional: Quality Education for All','Kemendikdasmen (Puspeka) dan Institut Leimena · 2 Okt 2026 · No. 52944/PUSPEKA-IL/CCRL-3/X/2026'],
['sertifikat-seminar-curriculum-of-love','Seminar Internasional: Curriculum of Love and Eco-theology','Ditjen Bimas Islam dan Ponpes As’adiyah Sengkang · 3–4 Feb 2025 · No. 01/IS/II/2025'],
['sertifikat-outbound-kbc','Outbound: Kepemimpinan dan Integrasi Kurikulum Berbasis Cinta','MAN 3 Makassar · 12 Jul 2026 · Pantai Akkarena, Makassar'],
['webinar-ham-2024','Webinar Internasional: Harmony in Diversity through Human Rights Education','Institut Leimena dan Kementerian HAM · 6 Des 2024 · No. 23696/HAM-IL/CCRL-2/XII/2024'],
['webinar-istiqlal-declaration','Webinar Internasional: Istiqlal Declaration, Interfaith Collaboration for Humanity','Institut Leimena dan Masjid Istiqlal · 19 Nov 2024 · No. 19520/MI-IL/CCRL-2/XI/2024'],
['webinar-youth-interfaith','Webinar Internasional: The Role of Youth in Interfaith and Cultural Collaboration','Institut Leimena dan MAARIF Institute · 25 Okt 2024 · No. 18603/MI-IL/CCRL-2/X/2024']];
var P=[
['pelatihan-multimedia-web','Pelatihan Multimedia Berbasis Web Angk. II','Balai Diklat Manado · 18–22 Mei 2024 · 20 JP · nilai 96,7 · No. A.698020/D.M/P.V/2024','docs/pelatihan-multimedia-web.jpg'],
['pelatihan-metodologi','Metodologi Pembelajaran (Model Pembelajaran Terupdate)','Balai Diklat Bandung · 23–27 Jun 2024 · 20 JP · nilai 94 · No. A.848195/D.M/P.V/2024'],
['pelatihan-lesson-study','Lesson Study di Era Digital Angk. V','BDK Papua (MOOC Pintar) · 6–10 Okt 2024 · 20 JP · nilai 100 · No. A.1376916/D.M/P.V/2024'],
['pelatihan-santri-mahir-ai','Short Course Santri Mahir Artificial Intelligence Angk. I','Pusdiklat Teknis (MOOC Pintar) · 20–21 Okt 2024 · 10 JP · nilai 90 · No. A.1352879/D.M/P.V/2024'],
['pelatihan-e-kinerja','Pelatihan Teknis E-Kinerja Angk. II','Pusdiklat Tenaga Administrasi · 31 Okt–4 Nov 2024 · 27 JP · nilai 80 · No. A.1277826/D.M/P.V/2024'],
['pelatihan-kma-450','Implementasi Kurikulum Madrasah KMA 450/2024 untuk MA Angk. II','Pusdiklat Teknis (MOOC Pintar) · 10–14 Nov 2024 · 20 JP · nilai 83 · No. A.1403531/D.M/P.V/2024'],
['pelatihan-ptk','Penelitian Tindakan Kelas (PTK) Angk. VIII','Pusdiklat Teknis (MOOC Pintar) · 5–10 Des 2024 · 20 JP · nilai 100 · No. A.1427444/D.M/P.V/2024']];
var J=[
['jurnal-jsi','Ortodoksi vs Heterodoksi (JSI 3(1), 2024)','Jurnal Sejarah Islam · penulis tunggal'],
['jurnal-tadrib','Methods of Punishment in Education (Tadrib 10(2), 2024)','Bersama A. Zaenuri, I. P. Pratama, A. Firdaus'],
['jurnal-alquds','Harmonization of Differences… Hadith al-Musafahah (Al Quds 8(3), 2024)','Bersama Fathul Muin Zainuddin']];
var X=[
['sertifikat-ai-ambassador-trainer-p2','Learning Competency: AI Coding for Educators (4 JP)','Lampiran sertifikat Trainer, Alkademi dan Microsoft'],
['sertifikat-safe-smart-peserta-p2','Daftar materi Safe & Smart 2026 (53 JP)','Lampiran sertifikat peserta'],
['pelatihan-metodologi-p2','Mata pelatihan: Metodologi Pembelajaran','Lampiran sertifikat Balai Diklat Bandung'],
['pelatihan-lesson-study-p2','Mata pelatihan: Lesson Study di Era Digital','Lampiran sertifikat BDK Papua'],
['pelatihan-santri-mahir-ai-p2','Mata pelatihan: Santri Mahir AI (chatbot santri)','Lampiran sertifikat Pusdiklat Teknis'],
['pelatihan-e-kinerja-p2','Mata pelatihan: E-Kinerja dan penyusunan SKP','Lampiran sertifikat Pusdiklat Tenaga Administrasi'],
['pelatihan-kma-450-p2','Mata pelatihan: Kurikulum Madrasah KMA 450/2024','Lampiran sertifikat Pusdiklat Teknis'],
['pelatihan-ptk-p2','Mata pelatihan: Penelitian Tindakan Kelas','Lampiran sertifikat Pusdiklat Teknis']];
var O=[
['sertifikat-terbaik-ii','Penghargaan: Terbaik II Penulisan Berita 2024','Kantor Kemenag Kota Parepare · 15 Jan 2025'],
['piala-pintar-digicon','Penghargaan Terbaik Pintar Digi.Con','MOOC Pintar Kemenag · tema Dampak Pembelajaran Digital 5.0'],
['wajah-media-pembelajaran','Buku antologi: Wajah Media Pembelajaran di Era AI','KOMED Action, 2025'],
['warisan-kasih','Buku: Warisan Kasih','Penulis tunggal, 2024'],
['prosiding-icrss','Prosiding ICRSS ke-1: The Ecological Spirit within Sacred Text','Orbit Publishing dan PKUMI, 2024']];
function R(id,a){var el=document.getElementById(id);if(!el)return;
el.innerHTML=a.map(function(x){return '<figure><img src="images/'+x[0]+'.jpg" alt="'+x[1]+'" loading="lazy"><figcaption><b>'+x[1]+'</b><small>'+x[2]+'</small><a href="'+(x[3]||'docs/'+x[0]+'.pdf')+'" target="_blank" rel="noopener">Buka dokumen ↗</a></figcaption></figure>'}).join('')}
R('cg',T);R('pg',P);R('jg',J);
/* slider: semua sertifikat dan bukti dukung */
var S=T.concat([X[0],X[1]],P,X.slice(2),O,J),n=0,t,play=!matchMedia('(prefers-reduced-motion:reduce)').matches,sl=document.getElementById('sl');
if(!sl)return;
var im=document.getElementById('sli'),tt=document.getElementById('slt'),ss=document.getElementById('sls'),sn=document.getElementById('sln'),pb=document.getElementById('slp');
function show(i){n=(i+S.length)%S.length;var s=S[n];im.style.opacity=0;
setTimeout(function(){im.src='images/'+s[0]+'.jpg';im.alt=s[1];tt.textContent=s[1];ss.textContent=s[2];sn.textContent=(n+1)+' / '+S.length;im.onload=function(){im.style.opacity=1}},180);
var q=new Image();q.src='images/'+S[(n+1)%S.length][0]+'.jpg'}
function tick(){clearTimeout(t);if(play)t=setTimeout(function(){show(n+1);tick()},4500)}
function go(d){show(n+d);tick()}
sl.querySelector('.p').onclick=function(){go(-1)};sl.querySelector('.n').onclick=function(){go(1)};
pb.onclick=function(){play=!play;pb.textContent=play?'⏸':'▶';tick()};
sl.addEventListener('mouseenter',function(){clearTimeout(t)});sl.addEventListener('mouseleave',tick);
sl.addEventListener('keydown',function(e){if(e.key==='ArrowLeft')go(-1);if(e.key==='ArrowRight')go(1)});
var x0=0;sl.addEventListener('touchstart',function(e){x0=e.touches[0].clientX},{passive:true});
sl.addEventListener('touchend',function(e){var d=e.changedTouches[0].clientX-x0;if(Math.abs(d)>40)go(d<0?1:-1)});
pb.textContent=play?'⏸':'▶';show(0);tick();
})();
