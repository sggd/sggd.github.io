//////////////////////////////////////////////////////////////////////////////////
// Vector2d V1.0.0
// (c) 2010 by R Cecco. <http://www.professorcloud.com>
// MIT License
//
// Please retain this copyright header in all versions of the software
//////////////////////////////////////////////////////////////////////////////////

// A handy 2d vector class.

var vector2d = function (x, y) {

    var vec = {
        // x and y components of vector stored in vx,vy.
        vx: x,
        vy: y,

        // scale() method allows us to scale the vector
        // either up or down.
        scale: function (scale) {
            vec.vx *= scale;
            vec.vy *= scale;
        },

        // add() method adds a vector.
        add: function (vec2) {
            vec.vx += vec2.vx;
            vec.vy += vec2.vy;
        },

        // sub() method subtracts a vector.
        sub: function (vec2) {
            vec.vx -= vec2.vx;
            vec.vy -= vec2.vy;
        },

        // negate() method points the vector in the opposite direction.
        negate: function () {
            vec.vx = -vec.vx;
            vec.vy = -vec.vy;
        },

        // length() method returns the length of the vector using Pythagoras.
        length: function () {
            return Math.sqrt(vec.vx * vec.vx + vec.vy * vec.vy);
        },

        // A faster length calculation that returns the length squared.
        // Useful if all you want to know is that one vector is longer than another.
        lengthSquared: function () {
            return vec.vx * vec.vx + vec.vy * vec.vy;
        },

        // normalize() method turns the vector into a unit length vector
        // pointing in the same direction.
        normalize: function () {
            var len = Math.sqrt(vec.vx * vec.vx + vec.vy * vec.vy);
            if (len) {
                vec.vx /= len;
                vec.vy /= len;
            }
            // As we have already calculated the length, it might as well be
            // returned as it may be useful.
            return len;
        },

        // Rotates the vector by an angle specified in radians.
        rotate: function (angle) {
            var vx = vec.vx,
                vy = vec.vy,
                cosVal = Math.cos(angle),
                sinVal = Math.sin(angle);
            vec.vx = vx * cosVal - vy * sinVal;
            vec.vy = vx * sinVal + vy * cosVal;
        },

        // toString() is a utility function for displaying the vector as text,
        // a useful debugging aid.
        toString: function () {
            return '(' + vec.vx.toFixed(3) + ',' + vec.vy.toFixed(3) + ')';
        }
    };
    return vec;
};

function Vector2d()
{
	if (arguments.length == 1)
	{
		this.vx = arguments[0].vx;
		this.vy = arguments[0].vy;
	}
	else
	{
		this.vx = arguments[0];
		this.vy = arguments[1];
	}
	
	// Multiply vector.
	Vector2d.prototype.mul = function(mul)
	{
		this.vx *= mul;
		this.vy *= mul;
	};
	
	// Add a vector.
	Vector2d.prototype.add = function(v2)
	{
		this.vx += v2.vx;
		this.vy += v2.vy;
	};
	
	// Subtract a vector.
	Vector2d.prototype.sub = function(v2)
	{
		this.vx -= v2.vx;
		this.vy -= v2.vy;
	};
	
	// Length of vector.
	Vector2d.prototype.len = function()
	{
		return Math.sqrt(this.vx*this.vx + this.vy*this.vy);
	};
	
	// Normalise (unit length). Also returns length before normalisation.
	Vector2d.prototype.normalise = function()
	{
		var len = Math.sqrt(this.vx*this.vx + this.vy*this.vy);
		if(len) {
			this.vx /= len;
			this.vy /= len;
		}
		return len;
	};
		
	// Dot product.	
	Vector2d.prototype.dotProd = function(v2)
	{
		return (this.vx * v2.vx) + (this.vy * v2.vy);
	};
	
	// Rotate vector by an angle in radians.
	Vector2d.prototype.rotate = function(ang)
	{
		this.vx = (this.vx * Math.cos(ang)) - (this.vy * Math.sin(ang));
		this.vy = (this.vy * Math.cos(ang)) + (this.vx * Math.sin(ang));
	};
	
	// Negate vector (point in opposite direction).
	Vector2d.prototype.negate = function()
	{
		this.vx = -this.vx;
		this.vy = -this.vy;
	};
	
	//toString function.
	Vector2d.prototype.toString = function()
	{
		return 'vx = ' + this.vx + ', vy = ' + this.vy;
	};
    
    Vector2d.prototype.rotate = function(angle) {
        this.vx = Math.cos(angle) * this.vx - Math.Sin(angle) * this.vy
        this.vy = Math.Sin(angle) * this.vx + Math.Cos(angle) * this.vy

    }
    
   /* Vector2D CrossProduct(const Vector2D & v) const
    {
    return Vector2D(v.Y, -v.X);
    }
    */
};
