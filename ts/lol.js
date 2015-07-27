function alternateSqSum() {
		if (arguments[0].length < 1)
			return null;
	
		args = arguments[0];
    	var num = parseInt(0);
		
		is_odd = true;
		for (var i = 0; i < args.length; i++ ){
			if (is_odd){
				num += args[i];
			}
			else{
				num += args[i] * args[i];
			}
			is_odd = !is_odd;
		}
		return num;
}