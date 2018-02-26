
module.exports = function(bp) {
  // Listens for a first message (this is a Regex)
    bp.hear(/GET_STARTED|hello|hi|test|hey|holla/i, (event, next) => {
        event.reply('#welcome') 
    })
    
    bp.hear({
        type: /message|text/i,
        text: /exit|bye|goodbye|quit|done|leave|stop/i
    }, (event, next) => {
        event.reply('#goodbye', {
            reason: 'unknown'
        })
        })


    bp.hear(/order|pizza/i, (event, next) => {
        event.reply('#orderpizza') 
    })

    bp.hear(/large/i, (event, next) => {
        event.reply('#sizepizza', {
            size: 'large'
        })
    })
    bp.hear(/small/i, (event, next) => {
        event.reply('#sizepizza', {
            size: 'small'
        })
    })
    bp.hear(/medium/i, (event, next) => {
        event.reply('#sizepizza', {
            size: 'medium'
        })
    })
}
