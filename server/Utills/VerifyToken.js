import jwt from "jsonwebtoken";

// verify Token using Jwt 

export const verifyToken = (req, res, next) => {
	const token = req.cookies.access_token;
	if(!token){
		return next(401, "You are not authenticated!");

	}

	jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
		if (err) return next(403, "Token is not valid");
		req.user = user;
		next();
	});
};


// verify Admin using Json Web Token 

export const verifyUser = (req, res, next) => {
	verifyToken(req, res, next, () => {
		if (req.user.id === req.params.id || req.user.IsAdmin) {
			next();

		} else {
			return next(403, "You are not authorized")
		}
});

}


// verify Admin using Json Web Token 

export const verifyAdmin = (req, res, next) => {
	verifyToken(req, res, next, () => {
		if (req.user.IsAdmin) {
			next();

		} else {
			return next(403, "You are not authorized")
		}
});

}
