console.log('ok');

$(window).load(function()
{
   let phones = [{ "mask": "(##) # ####-####"}];
    $('.phone').inputmask({ 
        mask: phones, 
        greedy: false, 
        definitions: { '#': { validator: "[0-9]", cardinality: 1}} });
});