// Challenge 03 - Passage Counter
// Create a function which calculates the time to read a text in seconds, if it takes over 60 seconds to read a passage return the time to minutes.

const passage = `susj fjsdod cjsaboefe ckjdabcaef jvbuaee.vdaljsvbdjbvjbsv hjbds;jvbdsjbv;savvadvb lbeiueVBJVJEWB;OVUEV SAN ;j ;sub uewauveb
vvkhdsabv kbdsav jbdskj c n>KJDS jLD jmc  j d  nz kjabdkj BDAKB ?jnj cm?N v.kjd  m.C>N  ahb v jjbliubvluiebluvbleuv;uebav dsvbiuhre
sbdjfbueobfoebvoinepv'epijvpir'ni  jbdjvahvouehfikvndknv;oiehoih;eIVNDKJNVho;ihf;oihweodjbvjbsv hjbds;jvbdsjbv;savvadvb lbeiueVBJVJEWB;OVUEV SAN ;j ;sub uewauveb
vvkhdsabv kbdsav jbdskj c n>KJDS jLD jmc  j d  nz kjabdkj BDAKB ?jnj cm?N v.kjd  m.C>N  ahb v jjbliubvluiebluvbleuv;uebav dsvbiuhre
sbdjfbueobfoebvoinepv'epijvpir'ni  jbdjvahvouehfikvndknv;oiehoih;eIVNDKJNVho;ihf;oihweoihfdjbvjbsv hjbds;jvbdsjbv;savvadvb lbeiueVBJVJEWB;OVUEV SAN ;j ;sub uewauveb
vvkhdsabv kbdsav jbdskj c n>KJDS jLD jmc  j d  nz kjabdkj BDAKB ?jnj cm?N v.kjd  m.C>N  ahb v jjbliubvluiebluvbleuv;uebav dsvbiuhre
sbdjfbueobfoebvoinepv'epijvpir'ni  jbdjvahvouehfikvndknv;oiehoih;eIVNDKJNVho;ihf;oihweoihfdjbvjbsv hjbds;jvbdsjbv;savvadvb lbeiueVBJVJEWB;OVUEV SAN ;j ;sub uewauveb
vvkhdsabv kbdsav jbdskj c n>KJDS jLD jmc  j d  nz kjabdkj BDAKB ?jnj cm?N v.kjd  m.C>N  ahb v jjbliubvluiebluvbleuv;uebav dsvbiuhre
sbdjfbueobfoebvoinepv'epijvpir'ni  jbdjvahvouehfikvndknv;oiehoih;eIVNDKJNVho;ihf;oihweoihfdjbvjbsv hjbds;jvbdsjbv;savvadvb lbeiueVBJVJEWB;OVUEV SAN ;j ;sub uewauveb
vvkhdsabv kbdsav jbdskj c n>KJDS jLD jmc  j d  nz kjabdkj BDAKB ?jnj cm?N v.kjd  m.C>N  ahb v jjbliubvluiebluvbleuv;uebav dsvbiuhre
sbdjfbueobfoebvoinepv'epijvpir'ni  jbdjvahvouehfikvndknv;oiehoih;eIVNDKJNVho;ihf;oihweoihfdjbvjbsv hjbds;jvbdsjbv;savvadvb lbeiueVBJVJEWB;OVUEV SAN ;j ;sub uewauveb
vvkhdsabv kbdsav jbdskj c n>KJDS jLD jmc  j d  nz kjabdkj BDAKB ?jnj cm?N v.kjd  m.C>N  ahb v jjbliubvluiebluvbleuv;uebav dsvbiuhre
sbdjfbueobfoebvoinepv'epijvpir'ni  jbdjvahvouehfikvndknv;oiehoih;eIVNDKJNVho;ihf;oihweoihfihfodjbvjuvuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuwbdubec;ewabvjbs
 N n>D .ka Jdx xjdb JDbbCUWCUWBVlo lo loremskdnjdbvab v vsjabuna jdvj sjvnsfnvjsanvfsnvonfvnofsbs`;
const length = text => {
    if (!text) {
      return 0 + " sec";
    }
    const wordsPerMinute = 100;
    const numberOfWords = text.match(/\s+/g).length + 1;
    if (numberOfWords < wordsPerMinute) {
      return `${Math.round(numberOfWords / wordsPerMinute * 60)} sec`;
    }
  
    const total = numberOfWords / wordsPerMinute;
    const minutes = Math.floor(total);
    const seconds = Math.round((total - minutes) * 10) / 10 * 60;
    return `${minutes} min ${seconds} sec`;
  };
  const readingTime = length(passage);
  console.log(`readingTime: ${readingTime}`);