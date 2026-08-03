(async()=>{
const gunzip=async b64=>{
  const bytes=Uint8Array.from(atob(b64),c=>c.charCodeAt(0));
  if(typeof DecompressionStream==='undefined') throw new Error('Trình duyệt không hỗ trợ giải nén dữ liệu dashboard.');
  const reader=new Blob([bytes]).stream().pipeThrough(new DecompressionStream('gzip')).getReader();
  const chunks=[];let total=0;
  while(true){const part=await reader.read();if(part.done)break;chunks.push(part.value);total+=part.value.length;}
  const out=new Uint8Array(total);let offset=0;for(const chunk of chunks){out.set(chunk,offset);offset+=chunk.length;}
  return new TextDecoder().decode(out);
};
window.BLUERISE_LIBRARY_DATA=JSON.parse(await gunzip(window.__BR_DATA_B64||''));
(0,eval)(await gunzip(window.__BR_APP_B64||''));
delete window.__BR_DATA_B64;delete window.__BR_APP_B64;
})().catch(e=>{console.error(e);document.body.insertAdjacentHTML('afterbegin','<div style="padding:16px;background:#fff1ef;color:#9d392f;font-family:sans-serif">Không thể tải dashboard: '+String(e.message||e)+'</div>')});
