<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Pulse</title>
	<link href="css/stylus.css" rel="stylesheet" type="text/css" />
	<link href="css/common_master.css" rel="stylesheet" type="text/css" />
	<link href="css/font.css" rel="stylesheet" type="text/css" />
	<!--<meta http-equiv="refresh" content="01"/>-->
</head>

<body>
	
	<?php include "core/header.core.php"; ?>
	
	
	
<div class="wrapper">
	
	<div class="col-wrapper">
		
		<?php include "core/sidebarmenu.core.php"; ?>
		
		<div class="full-column db-cont-wrap right">
		
			<div class="column-head">
				<div class="left pageback"><a href="#"><img src="img/back.svg" alt="" width="18px"></a></div>
				<div class="col-pagename left">User's Disease Management</div>
				<div class="master-creation right"><a href="#"><span class="crticn"><img src="img/plus.svg" alt="" width="16px"></span><span class="crtxt">Create New User</span><div class="clr"></div></a></div>
				<div class="clr"></div>
			</div>
			
			<div class="table-wrap">
			
				<div class="table-head">
					<div class="left tbl-cell size-l text-wrapping">Full Name</div>
					<div class="left tbl-cell size-s text-wrapping">DOB</div>
					<div class="left tbl-cell size-m text-wrapping">Email</div>
					<div class="left tbl-cell size-xs text-wrapping">Gender</div>
					<div class="left tbl-cell size-m text-wrapping">Company</div>
					<div class="left tbl-cell size-m text-wrapping">Emp. ID</div>
					<div class="left tbl-cell size-s text-wrapping">Regd. on</div>
					<div class="left tbl-cell size-s text-wrapping">Status</div>
					<div class="clr"></div>
				</div>
				
				<div class="table-body">
				
					<div class="table-row">
					<div class="left tbl-cell size-l text-wrapping">Rakesh Kumar Mishra</div>
					<div class="left tbl-cell size-s text-wrapping">24/12/2009</div>
					<div class="left tbl-cell size-m text-wrapping">rkmishra9889@gmail.com</div>
					<div class="left tbl-cell size-xs text-wrapping">Male</div>
					<div class="left tbl-cell size-m text-wrapping">Innobles Smart Technologies</div>
					<div class="left tbl-cell size-m text-wrapping">INBL980989</div>
					<div class="left tbl-cell size-s text-wrapping">24/12/2021</div>
					<div class="left tbl-cell size-s text-wrapping grntxt">Active</div>
					<div class="right tbl-actn posrel">
						<a href="#"><img src="img/more-vertical-dark.svg" alt="" height="18px"></a>
						<span class="drop-actns posabsolut hide">
							<a href="#" class="text-wrapping">Item one</a>
							<a href="#" class="text-wrapping">Item two</a>
							<a href="#" class="text-wrapping">Item three</a>
							<a href="#" class="text-wrapping">Item four</a>
							<a href="#" class="text-wrapping">Item five</a>
						</span>
					</div>
					<div class="clr"></div>
					</div>
					
					<div class="table-row row-highlight-red">
					<div class="left tbl-cell size-l text-wrapping">Rakesh Kumar Mishra</div>
					<div class="left tbl-cell size-s text-wrapping">24/12/2009</div>
					<div class="left tbl-cell size-m text-wrapping">rkmishra9889@gmail.com</div>
					<div class="left tbl-cell size-xs text-wrapping">Male</div>
					<div class="left tbl-cell size-m text-wrapping">Innobles Smart Technologies</div>
					<div class="left tbl-cell size-m text-wrapping">INBL980989</div>
					<div class="left tbl-cell size-s text-wrapping">24/12/2021</div>
					<div class="left tbl-cell size-s text-wrapping redtxt">Deactive</div>
					<div class="right tbl-actn posrel">
						<a href="#"><img src="img/more-vertical-dark.svg" alt="" height="18px"></a>
						<span class="drop-actns posabsolut">
							<a href="#" class="text-wrapping">Item one</a>
							<a href="#" class="text-wrapping">Item two</a>
							<a href="#" class="text-wrapping">Item three</a>
							<a href="#" class="text-wrapping">Item four</a>
							<a href="#" class="text-wrapping">Item five</a>
						</span>
					</div>
					<div class="clr"></div>
					</div>
					
					
					
					
					
				</div>
				
				<div class="pagination">
						<div class="left rsltpp">
							<div class="rsl-hding left">Result Per Page</div>
							<div class="rsl-counter left posrel"><a href="#">10</a>
								<!--<ul class="posabsolut">
									<li><a href="#">All</a></li>
									<li><a href="#">50</a></li>
									<li><a href="#">40</a></li>
									<li><a href="#">30</a></li>
									<li><a href="#">20</a></li>
								</ul>-->
							</div>
							<div class="clr"></div>
						</div>
						
						<div class="right pgntn">
							<a href="#"><img src="img/first.svg" alt="" width="14px"></a>
							<a href="#"><img src="img/previous.svg" alt="" width="14px"></a>
							<span href="" class="crntpg">Page 1 of 32</span>
							<a href="#"><img src="img/next2.svg" alt="" width="14px"></a>
							<a href="#"><img src="img/last.svg" alt="" width="14px"></a>
							<div class="clr"></div>
						</div>
						
						<div class="clr"></div>
				</div>
				
			</div>
			
		</div>
		
		
		
		<div class="clr"></div>
	
<?php include "core/footer.core.php"; ?>
</div>
			
	</div>
	
</body>
</html>