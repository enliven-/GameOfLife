'use strict';


class Board {

  constructor(options) {
    options   = options || { };
    this._w   = options.w || 50;
    this._h   = options.h || 50;
  }


  initGrid() {
    return this._constructTable(this._w, this._h);
  }


  render(cells_data) {
    cells_data.forEach(function(row, row_i) {
      row.forEach(function(cell, col_i) {
        
        let sel   = 'tr.tr' + row_i + ' > ' + 'td.td' + col_i;
        let alive = cell == 1;
        let $cell = $(sel);

        if(alive) {
          $cell.addClass('alive');
        } else {
          $cell.removeClass('alive');
        }

      });
    });
  }



  //private methods
  _constructTable(w, h) {
    const self    = this;
    const tr      = 'tr';
    const td      = 'td';

    let  $table   = $('<table class=table>');

    _(h).times(function(rcount) {
      let tr_class = tr + rcount;
      let $tr      = $('<tr>');
      $tr.attr('class', tr_class);

      _(w).times(function (wcount) {
        let td_class = td + wcount;
        let $td      = $('<td></td>');
        $td.attr('class', td_class);
        $td.appendTo($tr);
      });

      $tr.appendTo($table);
    });

    return $table;
  }

}