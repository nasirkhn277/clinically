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
				<div class="col-pagename left">Editing Clinic Profile</div>
				
				<div class="actionbuttons right">
					<a href="#" class="secondary left rmarg">Cancel</a>
					<a href="#" class="primary left rmarg">Save</a>
				<div class="clr"></div>
				</div>
				
				<div class="clr"></div>
			</div>
			
			<div class="content-page boxsizing editmode">
				
			<div class="view-mode">
				<p class="left">Clinic Name</p>
				<span><input type="text" class="frm-txtbox" placeholder="Eg. SK jain Clinic"></span>
				<div class="clr"></div>
			</div>
				
			<div class="view-mode">
				<p class="left">Area / Location</p>
				<span><input type="text" class="frm-txtbox" placeholder="Eg. Aminabad"></span>
				<div class="clr"></div>
			</div>
				
			<div class="view-mode">
				<p class="left">Address</p>
				<span><textarea class="frm-txarea">Enter Address</textarea></span>
				<div class="clr"></div>
			</div>
				
			<div class="view-mode">
				<p class="left">ZIP Code</p>
				<span><input type="text" class="frm-txtbox" placeholder="Eg. 112233"></span>
				<div class="clr"></div>
			</div>
				
			<div class="view-mode">
				<p class="left">Google Location</p>
				<span><input type="text" class="frm-txtbox" placeholder="copy from maps.google.com">
				<br>
					<div class="frm-file-specs">
					Visit maps.google.co and find your business. Copy link and paste here.
				</div>
				</span>
				
				<div class="clr"></div>
			</div>
				
			<div class="view-mode">
				<p class="left">Phone / Mobile</p>
				<span><input type="text" class="frm-txtbox" placeholder="Eg. 9999000011"></span>
				<div class="clr"></div>
			</div>
				
			<div class="view-mode">
				<p class="left">Email</p>
				<span><input type="text" class="frm-txtbox" placeholder="Eg. first.lastname#ymail.com"></span>
				<div class="clr"></div>
			</div>
				
				
			<div class="view-mode">
				<p class="left">Clinic Registration No.</p>
				<span><input type="text" class="frm-txtbox" placeholder="Eg. 75634875348"></span>
				<div class="clr"></div>
			</div>
				
			<div class="view-mode">
				<p class="left">Open Days & Timings</p>
				<span>
					<div class="ccltime">
						<div class="frm-rdobtn left"><input type="checkbox" class="frm.typrdo"></div>
						<div class="left frm-rdotxt text-wrapping rmarg">Monday</div>
						<div class="left rmarg"><input type="time" class="frm-txtbox cldate" placeholder="From"></div>
						<div class="left" style="margin-right: 50px;"><input type="time" class="frm-txtbox cldate" placeholder="Till"></div>
						<div class="left rmarg"><input type="time" class="frm-txtbox cldate" placeholder="From"></div>
						<div class="left"><input type="time" class="frm-txtbox cldate" placeholder="Till"></div>
						<div class="clr"></div>
					</div>
					<div class="ccltime">
						<div class="frm-rdobtn left"><input type="checkbox" class="frm.typrdo"></div>
						<div class="left frm-rdotxt text-wrapping rmarg">Tuesday</div>
						<div class="left rmarg"><input type="time" class="frm-txtbox cldate" placeholder="From"></div>
						<div class="left" style="margin-right: 50px;"><input type="time" class="frm-txtbox cldate" placeholder="Till"></div>
						<div class="left rmarg"><input type="time" class="frm-txtbox cldate" placeholder="From"></div>
						<div class="left"><input type="time" class="frm-txtbox cldate" placeholder="Till"></div>
						<div class="clr"></div>
					</div>
					<div class="ccltime">
						<div class="frm-rdobtn left"><input type="checkbox" class="frm.typrdo"></div>
						<div class="left frm-rdotxt text-wrapping rmarg">Wednesday</div>
						<div class="left rmarg"><input type="time" class="frm-txtbox cldate" placeholder="From"></div>
						<div class="left" style="margin-right: 50px;"><input type="time" class="frm-txtbox cldate" placeholder="Till"></div>
						<div class="left rmarg"><input type="time" class="frm-txtbox cldate" placeholder="From"></div>
						<div class="left"><input type="time" class="frm-txtbox cldate" placeholder="Till"></div>
						<div class="clr"></div>
					</div>
					<div class="ccltime">
						<div class="frm-rdobtn left"><input type="checkbox" class="frm.typrdo"></div>
						<div class="left frm-rdotxt text-wrapping rmarg">Thursday</div>
						<div class="left rmarg"><input type="time" class="frm-txtbox cldate" placeholder="From"></div>
						<div class="left" style="margin-right: 50px;"><input type="time" class="frm-txtbox cldate" placeholder="Till"></div>
						<div class="left rmarg"><input type="time" class="frm-txtbox cldate" placeholder="From"></div>
						<div class="left"><input type="time" class="frm-txtbox cldate" placeholder="Till"></div>
						<div class="clr"></div>
					</div>
					<div class="ccltime">
						<div class="frm-rdobtn left"><input type="checkbox" class="frm.typrdo"></div>
						<div class="left frm-rdotxt text-wrapping rmarg">Friday</div>
						<div class="left rmarg"><input type="time" class="frm-txtbox cldate" placeholder="From"></div>
						<div class="left" style="margin-right: 50px;"><input type="time" class="frm-txtbox cldate" placeholder="Till"></div>
						<div class="left rmarg"><input type="time" class="frm-txtbox cldate" placeholder="From"></div>
						<div class="left"><input type="time" class="frm-txtbox cldate" placeholder="Till"></div>
						<div class="clr"></div>
					</div>
					<div class="ccltime">
						<div class="frm-rdobtn left"><input type="checkbox" class="frm.typrdo"></div>
						<div class="left frm-rdotxt text-wrapping rmarg">Saturday</div>
						<div class="left rmarg"><input type="time" class="frm-txtbox cldate" placeholder="From"></div>
						<div class="left" style="margin-right: 50px;"><input type="time" class="frm-txtbox cldate" placeholder="Till"></div>
						<div class="left rmarg"><input type="time" class="frm-txtbox cldate" placeholder="From"></div>
						<div class="left"><input type="time" class="frm-txtbox cldate" placeholder="Till"></div>
						<div class="clr"></div>
					</div>
					<div class="ccltime">
						<div class="frm-rdobtn left"><input type="checkbox" class="frm.typrdo"></div>
						<div class="left frm-rdotxt text-wrapping rmarg">Sunday</div>
						<div class="left rmarg"><input type="time" class="frm-txtbox cldate" placeholder="From"></div>
						<div class="left" style="margin-right: 50px;"><input type="time" class="frm-txtbox cldate" placeholder="Till"></div>
						<div class="left rmarg"><input type="time" class="frm-txtbox cldate" placeholder="From"></div>
						<div class="left"><input type="time" class="frm-txtbox cldate" placeholder="Till"></div>
						<div class="clr"></div>
					</div>
				</span>
				<div class="clr"></div>
			</div>
				
				
			<div class="view-mode">
				<p class="left">Facilities Available</p>
				<span>
					<div>
					<div class="left frm-rdowrap">
						<div class="frm-rdobtn left"><input type="checkbox" class="frm.typrdo"></div>
						<div class="left text-wrapping">Parking</div>
						<div class="clr"></div>
					</div>
					<div class="left frm-rdowrap">
						<div class="frm-rdobtn left"><input type="checkbox" class="frm.typrdo"></div>
						<div class="left text-wrapping">Lounge</div>
						<div class="clr"></div>
					</div>
					<div class="left frm-rdowrap">
						<div class="frm-rdobtn left"><input type="checkbox" class="frm.typrdo"></div>
						<div class="left text-wrapping">Wheelchair</div>
						<div class="clr"></div>
					</div>
					<div class="left frm-rdowrap">
						<div class="frm-rdobtn left"><input type="checkbox" class="frm.typrdo"></div>
						<div class="left text-wrapping">Vital Checkup</div>
						<div class="clr"></div>
					</div>
					<div class="clr"></div>
				</div>
				</span>
				<div class="clr"></div>
			</div>
				
			<div class="view-mode">
				<p class="left">Username to Login</p>
				<span><input type="text" class="frm-txtbox" placeholder="clinci123"></span>
				<div class="clr"></div>
			</div>
			
			<div class="view-mode">
				<p class="left">Password</p>
				<span><input type="password" class="frm-txtbox" placeholder=""></span>
				<div class="clr"></div>
			</div>
				
			<div class="view-mode">
				<p class="left">Status</p>
				<span><div class="select dev_req_msg">
                            <select name="weekoff" id="weekoff">
                                <option value="">Active</option>
                                <option value="1">Deactive</option>
                            </select>
                            <div class="select__arrow"></div>
                        </div></span>
				<div class="clr"></div>
			</div>
				
			<div class="actionbuttons right" style="padding: 30px 0px;">
					<a href="#" class="secondary left rmarg">Cancel</a>
					<a href="#" class="primary left rmarg">Save</a>
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