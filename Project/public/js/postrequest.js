$( document ).ready(function() {

    function ajaxEditPost(){
      const selectForm = document.getElementById('btnedit');
      selectForm.addEventListener('click', (e)=>{
          e.preventDefault();

          var title = document.getElementById('title').value;
          var detail = document.getElementById('detail').value;
          var image = document.getElementById('image').value;
          var created = document.getElementById('created').value;

          var payload = {
            title: title,
            detail: detail,
            image: image,
            created:created
          };

          // DO POST
          $.ajax({
              type : "POST",
              url : "/admin/editnews",
              contentType : "application/json",
              data : JSON.stringify(payload),
              dataType : "json",  
          }).done(function(data){
                console.log(data.title);
                alert(data.title);
              return;
          });
      });
    }

    function ajaxDeletePost(){
        const selectForm = document.getElementById('btndelete');
        selectForm.addEventListener('click', (e)=>{
            e.preventDefault();
  
            var title = document.getElementById('title').value;
            var payload = {
              title: title
            };
  
            // DO POST
            $.ajax({
                type : "POST",
                url : "/admin/deletenews",
                contentType : "application/json",
                data : JSON.stringify(payload),
                dataType : "json",  
            }).done(function(data){
                console.log("done");
                return;
            });
        });
      }

    ajaxEditPost();
    ajaxDeletePost

  });