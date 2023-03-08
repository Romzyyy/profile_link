const tabs = document.querySelectorAll('[data-target]')
const tabContent = document.querySelectorAll('[data-content]')

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContent.forEach((tc) => {
            tc.classList.add('hidden')
        })
        target.classList.remove('hidden')

        tabs.forEach((t) => {
            t.classList.remove('bg-slate-500')
        })
        tab.classList.add('bg-slate-500')
        tabs.forEach((c) => {
            c.classList.remove('text-slate-800')
        })
        tab.classList.add('text-slate-800')
    })
})

const copy = document.querySelector('#copyright')
copy.textContent = new Date().getFullYear().toString()
