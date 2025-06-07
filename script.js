/**
 * TestMCP 项目的主要JavaScript文件
 */

// 当文档加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    console.log('TestMCP 项目已加载');
    
    // 添加页面交互
    addInteractivity();
});

/**
 * 为页面添加交互功能
 */
function addInteractivity() {
    // 获取当前时间并显示
    const timeElement = document.createElement('div');
    timeElement.id = 'current-time';
    timeElement.style.textAlign = 'center';
    timeElement.style.marginTop = '20px';
    timeElement.style.padding = '10px';
    timeElement.style.backgroundColor = '#f5f5f5';
    timeElement.style.borderRadius = '4px';
    
    document.querySelector('.container').appendChild(timeElement);
    
    // 更新时间的函数
    function updateTime() {
        const now = new Date();
        timeElement.textContent = `当前时间: ${now.toLocaleString()}`;
    }
    
    // 立即更新一次时间
    updateTime();
    
    // 每秒更新一次时间
    setInterval(updateTime, 1000);
}