function timerIncrement(){if (idleTime += 1, 1440 == idleTime){var e = "tk=" + $("#t").val() + "&expireTime=expireTime"; $.ajax({type:"POST", url:"logout.php", data:e, cache:!1, success:function(e){1 == e && (window.location.href = "index")}})}}idleTime = 0, $(document).ready(function(){setInterval("timerIncrement()", 6e4); $(this).mousemove(function(e){idleTime = 0}), $(this).keypress(function(e){idleTime = 0})});
