const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line


function checkEnterFieldsErrors(data) {
    console.log(data);
    const error = {}
    if (data['mobile-number'] === '') {
        error['mobile-number'] = {
           text: 'Enter mobile number',
           href: '#mobile-number'
        };
    }
    return error;
}

router.post('/version-0-1/select-template', (req, res) => {
    res.redirect('/version-0-1/enter-fields');
});

router.post('/version-0-1/enter-fields', (req, res) => {

    const error = checkEnterFieldsErrors(req.body);
    if(Object.keys(error).length === 0) {
        res.redirect('/version-0-1/check-answers');
    } else {
        res.render('version-0-1/enter-fields.html', { error, errorlist: Object.values(error) });
    }
});



module.exports = router
