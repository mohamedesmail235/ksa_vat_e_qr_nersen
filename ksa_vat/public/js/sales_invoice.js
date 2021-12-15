// Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
// License: GNU General Public License v3. See license.txt

frappe.ui.form.on("Sales Invoice", {
    refresh: function (frm) {
        var me = this;
        if (!frm.doc.qr_code) {
            $(frm.fields_dict['qr_image'].wrapper).html('');
        }

        if (frm.doc.qr_code) {
            let path = frm.doc.qr_code
            let qrcode = `<div><img src='${frm.doc.qr_code}' style='width:250.5px;height:250.5px;display:block;'></div>`
            $(frm.fields_dict['qr_image'].wrapper).html(qrcode);
        }
    },

})