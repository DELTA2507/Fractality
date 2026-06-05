export type Point = {
    x:number
    y:number
}

export type Point3D = {
    x:number
    y:number
    z:number
}

export type Triangle = [
    Point,
    Point,
    Point
]

export type Triangle3D = [
    Point3D,
    Point3D,
    Point3D
]

export type Tetrahedron = [
    Point3D,
    Point3D,
    Point3D,
    Point3D
]

export type Polyline = Point[]