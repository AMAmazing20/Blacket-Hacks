(function() {
  blacket.listItem = (item, itemId, price) => {
    if (price == `` || price == 0) return;
    $(`.arts__modal___VpEAD-camelCase`).remove();
    $("body").append(`<div id="errorModal" class="arts__modal___VpEAD-camelCase"><form class="styles__container___1BPm9-camelCase"><div class="styles__text___KSL4--camelCase"><div>Error<br><br>Something went wrong. Try again in a few minutes.</div></div><div class="styles__holder___3CEfN-camelCase"><div class="styles__buttonContainer___2EaVD-camelCase"><div id="closeButton" class="styles__button___1_E-G-camelCase styles__button___3zpwV-camelCase" role="button" tabindex="0"><div class="styles__shadow___3GMdH-camelCase"></div><div class="styles__edge___3eWfq-camelCase" style="background-color: #2f2f2f;"></div><div class="styles__front___vcvuy-camelCase styles__buttonInside___39vdp-camelCase" style="background-color: #2f2f2f;">Okay</div></div></div></div><input type="submit" style="opacity: 0; display: none;" /></form></div>`);
    $("#closeButton").click(() => {
      $("#errorModal").remove();
    });
  };

  blacket.appendBooster = (item) => {
    item = item + ' Hour Booster';
    let itemId = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 16);
    $(`.styles__packsWrapper___2hBF4-camelCase`).append(`<div id="${itemId}" class="styles__packContainer___3RwSU-camelCase" role="button" tabindex="0" style="background: ${blacket.items[item].color};"><div class="styles__packImgContainer___3NABW-camelCase"><img loading="lazy" src="${blacket.items[item].image}" class="styles__packImg___3to1S-camelCase" draggable="false"></div></div>`);

    $(`#${itemId}`).click(() => {
      $("body").append(`<div class="arts__modal___VpEAD-camelCase"><form class="styles__container___1BPm9-camelCase">
        <div class="styles__text___KSL4--camelCase"><div>Do you want to use or list this item?</div></div>
        <div class="styles__holder___3CEfN-camelCase"><div class="styles__buttonContainer___2EaVD-camelCase">
        <div id="useButton" class="styles__button___1_E-G-camelCase styles__button___3zpwV-camelCase" role="button" tabindex="0"><div class="styles__shadow___3GMdH-camelCase"></div><div class="styles__edge___3eWfq-camelCase" style="background-color: #2f2f2f;"></div><div class="styles__front___vcvuy-camelCase styles__buttonInside___39vdp-camelCase" style="background-color: #2f2f2f;">Use</div></div>
        <div id="listButton" class="styles__button___1_E-G-camelCase styles__button___3zpwV-camelCase" role="button" tabindex="0"><div class="styles__shadow___3GMdH-camelCase"></div><div class="styles__edge___3eWfq-camelCase" style="background-color: #2f2f2f;"></div><div class="styles__front___vcvuy-camelCase styles__buttonInside___39vdp-camelCase" style="background-color: #2f2f2f;">List</div></div>
        <div id="cancelButton" class="styles__button___1_E-G-camelCase styles__button___3zpwV-camelCase" role="button" tabindex="0"><div class="styles__shadow___3GMdH-camelCase"></div><div class="styles__edge___3eWfq-camelCase" style="background-color: #2f2f2f;"></div><div class="styles__front___vcvuy-camelCase styles__buttonInside___39vdp-camelCase" style="background-color: #2f2f2f;">Cancel</div></div>
       </div></div><input type="submit" style="opacity: 0; display: none;"> </form></div>
      `);

      $("#useButton").click(() => {
        $(".arts__modal___VpEAD-camelCase").remove();
        $("body").append(`<div class="arts__modal___VpEAD-camelCase"><form class="styles__container___1BPm9-camelCase"> <div class="styles__text___KSL4--camelCase"> <div> Are you sure you want to use your ${item}? </div></div><div class="styles__holder___3CEfN-camelCase"> <div class="styles__buttonContainer___2EaVD-camelCase"> <div class="styles__button___1_E-G-camelCase styles__button___3zpwV-camelCase" role="button" tabindex="0"> <div class="styles__shadow___3GMdH-camelCase"></div><div class="styles__edge___3eWfq-camelCase" style="background-color: #2f2f2f;"></div><div class="styles__front___vcvuy-camelCase styles__buttonInside___39vdp-camelCase" style="background-color: #2f2f2f;">Yes</div></div><div class="styles__button___1_E-G-camelCase styles__button___3zpwV-camelCase" role="button" tabindex="0"> <div class="styles__shadow___3GMdH-camelCase"></div><div class="styles__edge___3eWfq-camelCase" style="background-color: #2f2f2f;"></div><div class="styles__front___vcvuy-camelCase styles__buttonInside___39vdp-camelCase" style="background-color: #2f2f2f;">No</div></div></div></div><input type="submit" style="opacity: 0; display: none;"/> </form> </div>`);
        $("div.styles__button___1_E-G-camelCase:nth-child(1)").click(() => {
          $(".arts__modal___VpEAD-camelCase").remove();
          $("body").append(`<div id="errorModal" class="arts__modal___VpEAD-camelCase"><form class="styles__container___1BPm9-camelCase"><div class="styles__text___KSL4--camelCase"><div>Error<br><br>Something went wrong. Try again in a few minutes.</div></div><div class="styles__holder___3CEfN-camelCase"><div class="styles__buttonContainer___2EaVD-camelCase"><div id="closeButton" class="styles__button___1_E-G-camelCase styles__button___3zpwV-camelCase" role="button" tabindex="0"><div class="styles__shadow___3GMdH-camelCase"></div><div class="styles__edge___3eWfq-camelCase" style="background-color: #2f2f2f;"></div><div class="styles__front___vcvuy-camelCase styles__buttonInside___39vdp-camelCase" style="background-color: #2f2f2f;">Okay</div></div></div></div><input type="submit" style="opacity: 0; display: none;" /></form></div>`);
          $("#closeButton").click(() => {
            $("#errorModal").remove();
          });
        });
        $("div.styles__button___1_E-G-camelCase:nth-child(2)").click(() => {
          $(".arts__modal___VpEAD-camelCase").remove();
        });
      });

      $("#listButton").click(() => {
        $(".arts__modal___VpEAD-camelCase").remove();
        $("body").append(`<div class="arts__modal___VpEAD-camelCase"><form class="styles__container___1BPm9-camelCase">
            <div class="styles__text___KSL4--camelCase">List ${item} item for how many tokens?</div><div class="styles__holder___3CEfN-camelCase"><div class="styles__numRow___xh98F-camelCase">
            <div style="border: 3px solid rgba(0, 0, 0, 0.17);border-radius: 6px;width: 90%;height: 50px;margin: 0px;display: flex;flex-direction: row;align-items: center;"><input style="  border: none;height: 40px;line-height: 40px;font-size: 28px;text-align: center;font-weight: 700;font-family: Nunito, sans-serif;color: #ffffff;background-color: #3f3f3f;outline: none;width: 100%;" placeholder="Price" maxlength="9" value=""></div></div>
            <div class="styles__buttonContainer___2EaVD-camelCase"><div id="yesButton" class="styles__button___1_E-G-camelCase styles__button___3zpwV-camelCase" role="button" tabindex="0"><div class="styles__shadow___3GMdH-camelCase"></div><div class="styles__edge___3eWfq-camelCase" style="background-color: #2f2f2f;"></div><div class="styles__front___vcvuy-camelCase styles__buttonInside___39vdp-camelCase" style="background-color: #2f2f2f;">List</div></div>
            <div id="noButton" class="styles__button___1_E-G-camelCase styles__button___3zpwV-camelCase" role="button" tabindex="0"><div class="styles__shadow___3GMdH-camelCase"></div><div class="styles__edge___3eWfq-camelCase" style="background-color: #2f2f2f;"></div><div class="styles__front___vcvuy-camelCase styles__buttonInside___39vdp-camelCase" style="background-color: #2f2f2f;">Cancel</div>
            </div></div></div><input type="submit" style="opacity: 0; display: none;" /></form></div>
          `);

        $(`.styles__container___1BPm9-camelCase`).submit((event) => {
          event.preventDefault();
          blacket.listItem(item, itemId, $(`.styles__numRow___xh98F-camelCase > div:nth-child(1) > input:nth-child(1)`).val());
        });

        $(`.styles__numRow___xh98F-camelCase > div:nth-child(1) > input:nth-child(1)`).focus();
        $(`#yesButton`).click(() => {
          blacket.listItem(item, itemId, $(`.styles__numRow___xh98F-camelCase > div:nth-child(1) > input:nth-child(1)`).val());
        });
        $(`#noButton`).click(() => {
          $(`.arts__modal___VpEAD-camelCase`).remove();
        });
        $(`.styles__numRow___xh98F-camelCase > div:nth-child(1) > input:nth-child(1)`).on('input', () => {
          if (/[^0-9]/.test($(`.styles__numRow___xh98F-camelCase > div:nth-child(1) > input:nth-child(1)`).val())) {
            $(`.styles__numRow___xh98F-camelCase > div:nth-child(1) > input:nth-child(1)`).val($(`.styles__numRow___xh98F-camelCase > div:nth-child(1) > input:nth-child(1)`).val().replace(/[^0-9]/g, ''));
          }
        });
        blacket.stopLoading();
      });
      $("#cancelButton").click(() => {
        $(".arts__modal___VpEAD-camelCase").remove();
      });
    });
  };

  let oneHour = Number.parseInt(prompt('How many 1 Hour Boosters would you like to spoof?'));
  let threeHour = Number.parseInt(prompt('How many 3 Hour Boosters would you like to spoof?'));

  if (oneHour > 8 || threeHour > 8) {
    alert('It\'s unrealistic to have more than 8 of each booster.\nAutomatically set both values to 8.');
    oneHour = 8;
    threeHour = 8;
  };

  document.getElementsByClassName('styles__packsWrapper___2hBF4-camelCase')[0].children[0].remove();
  for (let one = 0; one < oneHour; one++) blacket.appendBooster('1');
  for (let three = 0; three < threeHour; three++) blacket.appendBooster('3');
})();
